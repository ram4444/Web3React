import React from 'react';
import web3 from 'web3';

import { contractAddr } from '../properties/contractAddr';

const BN = require('bn.js');

const TEXT = 'Send Ether to Contract';

//const testPayableContract = web3.eth.connect()

function SendEther2Contract() {
  const [buttonText] = React.useState(TEXT);
  const [isDisabled] = React.useState(false);

  let acc= [];

  function sendTransaction (acct) {
    
    window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: acct,
              to: contractAddr.TestPayable,
              value: web3.utils.toHex(web3.utils.toWei('0.79', "ether")),
              //value: web3.utils.toHex(web3.utils.toWei(new BN('0.79'), "ether")),
              gasPrice: web3.utils.toHex(web3.utils.toWei('21', "gwei")),
              gas: web3.utils.toHex(42000),
              chainId: 1337,
              data:''
            },
          ],
        },
        console.log
        )
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
  }

  const onClick = () => {
    /* send Transaction */
    acc = window.ethereum.request({ method: 'eth_requestAccounts' });
    acc.then(result => sendTransaction(result[0]));
  };
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default SendEther2Contract;