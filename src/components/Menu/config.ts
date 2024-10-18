import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://jetmoonswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.jetmoonswap.finance/#/pool',
      }
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://jetmoonswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://jetmoonswap.finance/pools'
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'mailto:support@jetmoonswap.finance',
      },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/jetmoonswap',
      },
      {
        label: 'Docs',
        href: 'https://doc.jetmoonswap.finance',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      {
        label: 'Medium',
        href: 'https://medium.com/@jetmoonswap',
      },
    ],
  },
]

export default config
