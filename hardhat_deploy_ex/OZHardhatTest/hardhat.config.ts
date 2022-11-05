// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.9",
// };

// export default config;




require("@nomicfoundation/hardhat-toolbox");
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

// rest of imports omitted

dotenv.config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [], // TODO: fill the private key
    },
  },
  // ...rest omitted
};
export default config;
