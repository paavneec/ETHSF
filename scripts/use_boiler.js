// example of interacting with boiler to ban someone locally, instead of using tally

require('dotenv').config();
const API_URL = process.env.MUMBAI_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const Web3 = createAlchemyWeb3(API_URL);

const { ethers } = require("hardhat");
const abiThingy = require("/Users/sjs/Documents/Mac22_local_projects/ETHSF/artifacts/contracts/boiler.sol/SampleContract.json");

async function main() {
    const [deployer] = await ethers.getSigners();

    let abi = abiThingy.abi;
    let provider = new ethers.providers.JsonRpcProvider(API_URL, 80001);
    const contractAddress = "0xbf7e0FE60f194605b7446c5D05B7fC894143297c";
    let contract = new ethers.Contract(contractAddress, abi, provider);
    
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY , provider);
    let contractWithSigner = contract.connect(wallet);

    serv_id = "1038181586232950945";
    paav_id = "935563232343633930";
    let tx = await contractWithSigner.callMidpoint(serv_id, paav_id, {gasLimit: 3e6, gasPrice: await provider.getGasPrice()});
    console.log(tx.hash);
    await tx.wait();
}
main();