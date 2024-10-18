import { Token } from '@uniswap/sdk-core';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WMATIC: { [chainId: number]: Token } = {
  [80002]: new Token(
    80002,
    '0x77D2223B70c2f63835792fd051060d509da65d48',
    18,
    'WMATIC',
    'Wrapped Matic',
  ),
};
