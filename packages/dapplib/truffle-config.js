require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note praise coast install inflict slot general'; 
let testAccounts = [
"0x0d0f9d579faed413016d7b3c4581daadc81571b68f642074334c17067eb19f0f",
"0x8ff43be40363b05370909ca9295600fd9853d40c0b9d172c0b4569cfe4ebca4f",
"0xc489aa8119e9023bfdd5006cb531ee2417345fcd28d3fab263f6e1eaac053ec9",
"0x74e8b3e00edd88964e7d1a86b866db7e7017898be71c43cda1cbf278e77f2cf7",
"0xd4937c88637adef1d66a333e889d2a525ad198fc0d8f7a375c64de1603725e76",
"0x646e50f62c43d0a8038ab992bdf3fd135a8f3d1f553fbeda9979236078be17ab",
"0xeb7948f918bf587d23b7180a4ac50077f24b187af0ca76683af1272c2588956c",
"0x3000950d95146179e2a72991a23b950a76007df9f8378e2de023658a73ae0f0d",
"0xbbe7ff49cd02381cc95319cb66cbb302892575bfce071c62e67edf8ca20ab009",
"0x66a6eb60e4622b5a1cdba4bd87bd105e02f075d228c18d7c8a39013a7a2337be"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


