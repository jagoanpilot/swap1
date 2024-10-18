import { ChainId } from '@uniswap/sdk';

export const getMaticPrice: (chainId: ChainId) => Promise<number[]> = async (
  chainId: ChainId,
) => {
  let maticPrice = 0;
  let maticPriceOneDay = 0;
  let priceChangeMatic = 0;

  const res = await fetch(
    `${process.env.REACT_APP_LEADERBOARD_APP_URL}/utils/matic-price?chainId=${chainId}`,
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.data) {
      maticPrice = data.data.maticPrice;
      maticPriceOneDay = data.data.maticPriceOneDay;
      priceChangeMatic = data.data.priceChangeMatic;
    }
  }

  return [maticPrice, maticPriceOneDay, priceChangeMatic];
};

//Token Helpers

const WETH_ADDRESSES = ['0x77D2223B70c2f63835792fd051060d509da65d48'];

export function formatTokenSymbol(address: string, symbol: string) {
  if (WETH_ADDRESSES.includes(address)) {
    return 'MATIC';
  } else if (symbol.toLowerCase() === 'mimatic') {
    return 'MAI';
  } else if (symbol.toLowerCase() === 'amaticc') {
    return 'ankrMATIC';
  }
  return symbol;
}

export function formatTokenName(address: string, name: string) {
  if (WETH_ADDRESSES.includes(address)) {
    return 'Matic';
  }
  return name;
}
