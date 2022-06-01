require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const FUJI_PRIVATE_KEY = process.env.FUJI_PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',    
  networks: {
    localhost: {
      url: "http://localhost:8545",      
    },
    fujiAvalanche: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,    
      accounts: [`0x${FUJI_PRIVATE_KEY}`],    
    },
    // TODO: change it to FUJI
    hardhat: {
      forking: {
        url: `https://api.avax-test.network/ext/bc/C/rpc`,
      },
    },
  }
};
