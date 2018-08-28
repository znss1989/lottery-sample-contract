const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'shuffle garment proud ribbon cream party zero expose bind toddler impulse auction',
  'https://rinkeby.infura.io/QMjlpARxJBrcDKChTfPB'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const fetchedAccounts = await web3.eth.getAccounts();
  console.log('To deploy from account', fetchedAccounts[0]);
  const res = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode
    })
    .send({
      from: fetchedAccounts[0],
      gas: '1000000'
    });
  console.log(interface);
  console.log('Contract deployed at', res.options.address);
};

deploy();