const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const BoilerContract = await ethers.getContractFactory("SampleContract");
    const boilerContract = await BoilerContract.deploy();
    await boilerContract.deployed();
    console.log("Boiler address:", boilerContract.address);
    console.log("Transaction hash:", boilerContract.deployTransaction.hash);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });