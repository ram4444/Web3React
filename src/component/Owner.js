import React from 'react';
import Web3 from 'web3';

import { contractAddr } from '../properties/contractAddr';

const web3 = new Web3(window.web3.currentProvider);
const { abi } = require('../abi/TestPayable.json');
var contract = new web3.eth.Contract(abi, contractAddr.TestPayable)

const ONBOARD_TEXT = 'Owner';

function Owner() {
  const [buttonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled] = React.useState(false);

  let acc= [];

  function ivkContractFuncByCALL (acct) {
    contract.methods.owner().call({
      from: acct,
      chainId: 1337
    })
    .then(console.log);
  }


  const onClick = () => {
    //Call Ethereum Func to an address
    //Contract use RETURN
    acc = window.ethereum.request({ method: 'eth_requestAccounts' });
    acc.then(result => ivkContractFuncByCALL(result[0]));
  };
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Owner;