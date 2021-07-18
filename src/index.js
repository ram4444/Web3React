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
import Owner from './component/Owner';


ReactDOM.render(
  <React.StrictMode>
      <ConnectMetaMask />
      <SendEther2Contract />
      <Send2PayableFunc />
      <CallContractFunc />
      <Withdraw />
      <Owner />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
