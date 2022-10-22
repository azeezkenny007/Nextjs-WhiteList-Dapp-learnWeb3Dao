export const WHITELIST_CONTRACT_ADDRESS = "0x5551CC67444c26FAF8504028A846bE38BDcF05f1"
export const abi = [
 {
   "inputs": [
     {
       "internalType": "uint8",
       "name": "_maxWhitelistedAddresses",
       "type": "uint8"
     }
   ],
   "stateMutability": "nonpayable",
   "type": "constructor"
 },
 {
   "inputs": [],
   "name": "addAddressToWhitelist",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
 },
 {
   "inputs": [],
   "name": "maxWhitelistedAddresses",
   "outputs": [
     {
       "internalType": "uint8",
       "name": "",
       "type": "uint8"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [],
   "name": "numAddressesWhitelisted",
   "outputs": [
     {
       "internalType": "uint8",
       "name": "",
       "type": "uint8"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "",
       "type": "address"
     }
   ],
   "name": "whitelistedAddresses",
   "outputs": [
     {
       "internalType": "bool",
       "name": "",
       "type": "bool"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 }
]

