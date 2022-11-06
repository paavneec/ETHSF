import { ethers, network } from "hardhat"
import {
  FUNC,
  NEW_STORE_VALUE,
  PROPOSAL_DESCRIPTION,
  MIN_DELAY,
  developmentChains,
} from "../helper-hardhat-config"
import { moveBlocks } from "../utils/move-blocks"
import { moveTime } from "../utils/move-time"


export async function queueAndExecute2() {
  const governor = await ethers.getContract("GovernorContract")
  console.log("DONE")
  const queueTx = await governor.queue(["0xC2623edbaDB7f35D91004c86bbbf2F9Ec0AC6529"], [0], [], "0x026c756500000000000000000000000000000000000000000000000000000000")
  console.log("DONE")
  await queueTx.wait(1)
  console.log(queueTx);
  const executeTx = await governor._execute(
    [],
    [0],
    [],
    0x626c756500000000000000000000000000000000000000000000000000000000, 
    {gasLimit: 3e7 }
  )
  await executeTx.wait(1);
  console.log(executeTx);
}

queueAndExecute2()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

// export async function queueAndExecute() {
//   const args = [NEW_STORE_VALUE]
//   const functionToCall = FUNC
//   const box = await ethers.getContract("Box")
//   const encodedFunctionCall = box.interface.encodeFunctionData(functionToCall, args)
//   const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION))
//   // could also use ethers.utils.id(PROPOSAL_DESCRIPTION)

//   const governor = await ethers.getContract("GovernorContract")
//   console.log("Queueing...")
//   const queueTx = await governor.queue([box.address], [0], [encodedFunctionCall], descriptionHash)
//   await queueTx.wait(1)

//   if (developmentChains.includes(network.name)) {
//     await moveTime(MIN_DELAY + 1)
//     await moveBlocks(1)
//   }

//   console.log("Executing...")
//   // this will fail on a testnet because you need to wait for the MIN_DELAY!
//   const executeTx = await governor.execute(
//     [box.address],
//     [0],
//     [encodedFunctionCall],
//     descriptionHash
//   )
//   await executeTx.wait(1)
//   console.log(`Box value: ${await box.retrieve()}`)
// }







// queueAndExecute()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
