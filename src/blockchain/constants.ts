export const defaultChainId = 1;

export const rpcUrls = {
  1337: 'http://localhost:8545',
  42: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
}

export const networkNames = {
  // 1: 'Ethereum Mainnet',
  1337: 'Localhost8545',
  42: 'Kovan Test Network',
  1: 'Ethereum Mainnet'
}

export const addresses = {
  Presale: {
    1337: '0x607DA9BCa16c2c20Fb17DAA70AC184B2B4Bbc79A',
    42: '0xe454B14138DAc65Cd108Ad49FE2A08db8fCFcA1c',
    1: '0x3D0A17185610a095873Dada98D52242933923F91'
  },
}

export const tokenInfos = {

  ETH: {
    name: "Ethereum Coin",
    symbol: "ETH",
    decimals: 18
  },


  KATA: {
    name: 'KATA',
    symbol: '$KATA',
    address: {
      1337: '0x460017232eb6EFB550C4CF34009f8AAA6477c5255',
      42: '0xe89693A1AAD134152aD6870626B1B279f02Adb7b',
    },
    decimals: 18,
  },
}