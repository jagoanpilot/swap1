import { Currency } from '@uniswap/sdk-core';
import { PoolState, usePools } from 'hooks/v3/usePools';
import { Pool } from 'v3lib/entities/pool';
import { useMemo } from 'react';
import { useAllCurrencyCombinations } from './useAllCurrencyCombinations';
import { FeeAmount } from 'v3lib/utils';
import { Token } from '@uniswap/sdk-core';

/**
 * Returns all the existing pools that should be considered for swapping between an input currency and an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */
export function useV3SwapPools(
  currencyIn?: Currency,
  currencyOut?: Currency,
  isUni?: boolean,
): {
  pools: Pool[];
  loading: boolean;
} {
  const allCurrencyCombinations = useAllCurrencyCombinations(
    currencyIn,
    currencyOut,
  );

  const allCurrencyCombinationsWithAllFees: [
    Token,
    Token,
    FeeAmount,
  ][] = useMemo(
    () =>
      allCurrencyCombinations.reduce<[Token, Token, FeeAmount][]>(
        (list, [tokenA, tokenB]) => {
          return list.concat([
            [tokenA, tokenB, FeeAmount.LOWEST],
            [tokenA, tokenB, FeeAmount.LOW],
            [tokenA, tokenB, FeeAmount.MEDIUM],
            [tokenA, tokenB, FeeAmount.HIGH],
          ]);
        },
        [],
      ),
    [allCurrencyCombinations],
  );

  const allCurrencyCombinationsWithoutFees: [
    Token,
    Token,
    undefined,
  ][] = useMemo(
    () =>
      allCurrencyCombinations.reduce<[Token, Token, undefined][]>(
        (list, [tokenA, tokenB]) => {
          return list.concat([[tokenA, tokenB, undefined]]);
        },
        [],
      ),
    [allCurrencyCombinations],
  );

  const pools = usePools(
    isUni
      ? allCurrencyCombinationsWithAllFees
      : allCurrencyCombinationsWithoutFees,
    isUni,
  );

  return useMemo(() => {
    return {
      pools: pools
        .filter((tuple): tuple is [PoolState.EXISTS, Pool] => {
          return tuple[0] === PoolState.EXISTS && tuple[1] !== null;
        })
        .map(([, pool]) => pool),
      loading: pools.some(([state]) => state === PoolState.LOADING),
    };
  }, [pools]);
}
