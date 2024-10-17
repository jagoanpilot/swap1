
# Pancake Swap Listing Tutorial

So, you’ve come, you’ve tasted our secret sauce and now you’re wanting to be a part of the PancakeSwap kitchen.

If you’re interested in listing on the PancakeSwap exchange, follow this guide closely.

## Adding Tokens

If you are seeking to be added to the [jagoan-pilot.onlliine](https://jagoan-pilot.onlliine/) exchange, you should:

1. Fork the [JpgSwap Interface](https://github.com/jagoanpilot/jpg-swap-interface/) repository on GitHub
2. Upload your **logo** in a 96*96px transparent .png format to the `/public/images/coins` directory. Please name the logo as your symbol in uppercase.

3. Add your **token information** using the example format provided below to `pancakeswap.json` in the `/src/constants/token/` directory.

4. Create a **pull request** detailing information about your project, website address, and contact details (telegram)

## Examples

**Logo format:**

`JPG.png`

**Token information format:**

```json
{
"name": "Jagoan Pilot",
"symbol": "JPG",
"address": "0xf23f2fcac69a08277af963a27565175a844f9163",
"chainId": 56,
"decimals": 18,
"logoURI": "/images/coins/JPG.png"
},
```

If you're not comfortable with GitHub pull requests, please open a [new issue](https://github.com/pancakeswap/pancake-swap-interface/issues/new) requesting to be added.

## Reviews

Once added, tokens are also re-reviewed at regular intervals in order to maintain quality assurance in-line with the below criteria, and may be removed should severe and/or unresolved issues be encountered.

### Criteria

- Volume
- Liquidity
- Community feedback
