import React from 'react';
import Web3 from 'web3';

import { contractAddr } from '../../properties/contractAddr';

const web3 = new Web3(window.web3.currentProvider);
const { abi } = require('../../abi/TestPayable.json');
var contract = new web3.eth.Contract(abi, contractAddr.TestPayable)

const ONBOARD_TEXT = 'Transfer ERC20';

//const testPayableContract = web3.eth.connect()

function TransferERC20() {
  const [buttonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled] = React.useState(false);

  let acc= [];

  function ivkContractFuncBySEND (acct) {
    contract.methods._mint(acct, 100000).send({
      from: acct,
      //value: web3.utils.toHex(web3.utils.toWei(new BN('2'), "ether")),
      gasPrice: web3.utils.toHex(web3.utils.toWei('21', "gwei")),
      gas: web3.utils.toHex(42000),
      chainId: 1337,
      data:''
    })
    .then(console.log);
  }

  const onClick = () => {
    //Sending Ethereum to an address
    acc = window.ethereum.request({ method: 'eth_requestAccounts' });
    acc.then(result => ivkContractFuncBySEND(result[0]));
  };
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default TransferERC20;