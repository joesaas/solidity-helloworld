import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
    }, //
    // cronos_testnet3: {
    //   url: "https://evm-t3.cronos.org",
    //   accounts: [process.env.PRIVATE_KEY!],
    // }
  }
};

export default config;
