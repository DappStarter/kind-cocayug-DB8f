require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food dad random magnet concert grunt light army giant'; 
let testAccounts = [
"0x96a63e1d7e5ad0fc0e9486eb865a7b9569f404bb9eac804bbca040409dc089df",
"0x30198aa96a6b3ab8071b003c90d9724abf3453a583228742b2160e232130d532",
"0xdc071dee996eb52ab1621739ef38722894f3579b03aaffd9e13705f9013ba500",
"0xb710a0efbaf9128f77f56faf368d6b0f561ac88c227420be77af968dc6f94a16",
"0x4d4744251db5a6d753df5df38eef6c330e8521ea21dcfef54f5faceb15cf3024",
"0x24bd2318d971f97e15c83b922e700660e2423f6d9dfb583a8bbc9a4b38aae2b0",
"0x7b09a4d7db12c7e1b9641318322ecce42e64ca4eeeb59df7836cbfc78e60b80f",
"0xe9e1f90732c7f9beeb706ad1dec4bc3268c38502533f496828046a1f319b1f45",
"0xc2afcdefe63c8a9564b49afe1911b29f50a361df94b673085d491cc20b4de6aa",
"0xdd550b2c18286c0c961dd97491cab2b577ce3ae48fdbd89905847da7847406d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

