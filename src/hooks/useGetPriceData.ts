import ERC20_INTERFACE from 'constants/abis/erc20'
import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import priceContracts from 'constants/priceContracts'
import { useMulticallContract } from './useContract'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_BNB: string
    }
  }
}

type yPantyPriceApiResponse = {
  /* eslint-disable camelcase */
  updated_at: string
  data: {
    name: string
    symbol: string
    price: string
    price_BNB: string
  }
}

export const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (multicallContract) {
          const { pantyAddress, busdAddress, bnbAddress, pantyBnbLpAddress, busdBnbLpAddress } = priceContracts;
          const calls = [
            [pantyAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [pantyBnbLpAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [pantyBnbLpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [busdBnbLpAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [busdBnbLpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [pantyAmount, bnbAmount1, busdAmount, bnbAmount2] = result.map(r => ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));

          const panty = new BigNumber(pantyAmount);
          const bnb1 = new BigNumber(bnbAmount1);
          const busd = new BigNumber(busdAmount);
          const bnb2 = new BigNumber(bnbAmount2);
          const pantyPrice = bnb1.div(panty).multipliedBy(busd.div(bnb2)).toNumber();

          setData(pantyPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export const useGetyPantyPrice = () => {
  const [data, setData] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const token = '0x90ad5433fb7b70e04244824d825a98ed013477de'
      const response = await fetch(`https://api.pancakeswap.info/api/v2/tokens/${token}`)
      const parsedData = (await response.json()) as yPantyPriceApiResponse
      setData(parseFloat(parsedData.data.price))
    }

    fetchData()
  }, [])

  return data
}

export default useGetPriceData
