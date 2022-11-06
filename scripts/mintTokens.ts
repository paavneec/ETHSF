import { network, ethers } from "hardhat"
async function main() {
    const token = await ethers.getContract("GovernanceToken")
    console.log(token.address);
    //const transferTx = await token._mint(0xBC3f916f3384eb088B2c662f59Aca594A5B25b02, 100)
    const balance = await token.balanceOf("0xBC3f916f3384eb088B2c662f59Aca594A5B25b02");
    console.log("Owner has " + balance + " tokens");
    
    const transferTx1 = await token.transfer("0x564097Eb6daA523A8e7FaAA4831eB53C755bD8F5", 5000000);
    console.log("Transfer1 " + transferTx1.hash);
    const balancePaav = await token.balanceOf("0x564097Eb6daA523A8e7FaAA4831eB53C755bD8F5");
    console.log("Paav has " + balancePaav + " tokens");
    
    const transferTx2 = await token.transfer("0xefb8a94Eea87801de02ae41e0c943C3fEADAec42", 5000000);
    console.log("Transfer2 " + transferTx2.hash);
    const balanceRiver = await token.balanceOf("0xefb8a94Eea87801de02ae41e0c943C3fEADAec42");
    console.log("River has " + balanceRiver + " tokens");
    
    
    
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })