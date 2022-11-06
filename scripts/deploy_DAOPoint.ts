// const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const governorAddr = "";

    const DAOPoint = await ethers.getContractFactory("DAOPoint");
    const daoPoint = await DAOPoint.deploy(governorAddr);
    await daoPoint.deployed();
    console.log("Boiler address:", daoPoint.address);
    console.log("Transaction hash:", daoPoint.deployTransaction.hash);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });