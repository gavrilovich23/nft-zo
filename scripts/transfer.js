const { ownerAddress, alchemyContractAddress } = require('../secrets.json');

async function main() {
  const owner = ownerAddress;
  const newOwner = '0xA696906271b10DA4D6ABf13828Ee787d597b2566';
  // const newOwner = '0xa190a41edA88931A92468065903C8FA908611892';
  const tokenId = 1;

  const contractFactory = await ethers.getContractFactory('ZoFactory');
  const contract = await contractFactory.attach(alchemyContractAddress);

  const data = await contract.transferFrom(owner, newOwner, tokenId);
  console.log('NZO transfer success:', data);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
