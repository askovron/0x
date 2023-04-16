export interface CryptoCurrency {
  logoURI: string;
  address: string;
  symbol: string;
  decimals: number;
  name: string;
  chainId: number;
}
export type CryptoCurrencySelect = CryptoCurrency & {
  value: string;
  label: string;
};

export const list: CryptoCurrencySelect[] = [
  {
    chainId: 1,
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    name: 'WETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295',
  },
  {
    chainId: 1,
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
  },
  {
    chainId: 1,
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    name: 'Dai',
    symbol: 'DAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734',
  },
  {
    chainId: 1,
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    name: 'Tether',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/325/thumb/Tether.png?1668148663',
  },
  {
    chainId: 1,
    address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744',
  },
  {
    chainId: 1,
    address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    name: '0x',
    symbol: 'ZRX',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/863/thumb/0x.png?1547034672',
  },
].map(
  (currency): CryptoCurrencySelect => ({
    ...currency,
    label: currency.name,
    value: currency.address,
  })
);
