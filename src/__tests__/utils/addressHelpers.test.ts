import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    80002: '0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 80002)`, () => {
    process.env.REACT_APP_CHAIN_ID = '80002'
    const expected = address[80002]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[80002]
    expect(getAddress(address)).toEqual(expected)
  })
})
