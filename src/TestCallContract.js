import React from 'react';
import web3 from 'web3';

const BN = require('bn.js');

const ONBOARD_TEXT = 'TestCallContract';



function TestCallContract() {
  const [buttonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled] = React.useState(false);

  let acc= [];
  //const ethereumButton = document.querySelector('.enableEthereumButton');
  //const sendEthButton = document.querySelector('.sendEthButton');

  function sendTransaction (acct) {
    
    window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: acct,
              //to: '0x9433f6A41dbb91e909688bCEE876d17a015B4a23',
              to: '0x63e428a5EC439d062c13efE46025e90928049fa5',
              value: web3.utils.toHex(web3.utils.toWei(new BN('12'), "ether")),
              gasPrice: web3.utils.toHex(web3.utils.toWei('21', "gwei")),
              gas: web3.utils.toHex(42000),
              chainId: 1337,
              data:''
            },
          ],
        },
        //function(error, hash){
          //console.log(hash);
          //console.log(error);
        //}
        console.log
        )
        //.on('event', function(hash){})
        //.on('event2', (hash) =>{})
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
  }

  function gasPrice () {
    window.ethereum
        .request({
          method: 'eth_gasPrice',
          params: [

          ],
        })
        .then((result) => console.log(result))
        .catch((error) => console.error);
  }


  const onClick = () => {
    //Sending Ethereum to an address
    //sendEthButton.addEventListener('click', () => {
    /* send Transaction */
    acc = window.ethereum.request({ method: 'eth_requestAccounts' });
    acc.then(result => sendTransaction(result[0]));
    
      //console.log(accounts.then(()=> r);
      //accounts.then(result => console.log(result[0]));
      
    //});
    //gasPrice();
  };
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}

//Local Contract
//0xDd2f6C0f07F86BF35A2669dc3B99918429CdEb50

export default TestCallContract;