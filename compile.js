const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const lotterySource = fs.readFileSync(lotteryPath, 'utf8');

const res = solc.compile(lotterySource, 1);

module.exports = res.contracts[':Lottery'];
