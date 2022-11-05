const { ethers } = require("hardhat");

// import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();

  const TimelockController = await ethers.getContractFactory("TimelockController");
  const timelock = await TimelockController.deploy(3600, [], []);

  const MyGoverner = await ethers.getContractFactory("MyGovernor");
  const myGovernor = await MyGoverner.deploy(token.address, timelock.address, {gasLimit: 3e7});

  console.log("Token address:", token.address);
  console.log("gov address:", myGovernor.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });