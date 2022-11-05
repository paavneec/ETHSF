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
  console.log("here2");
  const myGovernor = await MyGoverner.deploy(token.address, timelock.address);
  console.log("here3");
  const deployedGovernor  = await myGovernor.deployed()
    console.log("MyGovernor deployed to:", myGovernor.address);

  console.log("Token address:", token.address);
  console.log("gov address:", myGovernor.address);

  // const Token = await ethers.getContractFactory("MyToken");
  // const token = await Token.deploy();

  // const TimelockController = await ethers.getContractFactory("TimelockController");
  // const TimelockAddress = '0x36A373B51CB42eA098A2e63Bae5D6Fd8c8A7E211';
  // const timelockController = await TimelockController.attach(TimelockAddress);

  // // const timelock = await TimeLock.deploy(1, [0x0231C4ea808409667BB5a5b3a283118181F7AA2A], [0x0231C4ea808409667BB5a5b3a283118181F7AA2A],0x0231C4ea808409667BB5a5b3a283118181F7AA2A);
  // // console.log("here3");

  // const lockedAmount = ethers.utils.parseEther("1");
  // const MyGoverner = await ethers.getContractFactory("MyGovernor");
  // const myGovernor = await MyGoverner.deploy(token, timelockController);
  // const deployedGovernor  = await myGovernor.deployed()
  //   console.log("MyGovernor deployed to:", myGovernor.address);

  // console.log("Token address:", token.address);
  // console.log("gov address:", myGovernor.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });