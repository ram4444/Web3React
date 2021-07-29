import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//components
import ConnectMetaMask from './component/ConnectMetaMask';
import CallContractFunc from './component/CallContractFunc';
import Send2PayableFunc from './component/Send2PayableFunc';
import SendEther2Contract from './component/SendEther2Contract';
import Withdraw from './component/Withdraw';
import PassHalfEther from './component/PassHalfEther';
import Owner from './component/Owner';
import MintERC20 from './component/ERC20/MintERC20';
import TransferERC20 from './component/ERC20/TransferERC20';
import TotalSupplyERC20 from './component/ERC20/TotalSupplyERC20';


ReactDOM.render(
  <React.StrictMode>
      <ConnectMetaMask />
      <SendEther2Contract />
      <Send2PayableFunc />
      <CallContractFunc />
      <Withdraw />
      <Owner />
      <PassHalfEther />
      <br />
      <MintERC20 />
      <TransferERC20 />
      <TotalSupplyERC20 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
