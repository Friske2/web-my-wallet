import React from 'react';
import { useNavigate } from 'react-router'
import ListWallet from '../components/listWallet';
function PageHome() {
  const history = useNavigate();
  function toAddWallet() {
    history('/wallet/add');
  }
  function toWalletDetail() {
    history('/wallet/1');
  }
  return (
    <div>
      <div>
        <h4>ยอดเงินทั้งหมด</h4>
      </div>
      <div>
        <h1 className='text-primary'>30,000 บาท</h1>
      </div>
      <h5>
        รายการกระป๋าเงิน
      </h5>
      <div className='line'>
      </div>
      <ListWallet handleClick={toWalletDetail} />
      <div className='position-footer'>
        <div className="d-grid gap-2 my-2">
          <button onClick={toAddWallet} className='btn btn-primary'>+ Add wallet</button>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
