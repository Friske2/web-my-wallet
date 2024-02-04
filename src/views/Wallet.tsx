import React from 'react';
import { useNavigate } from 'react-router'
import ListTransection from '../components/listTransection';
function PageWallet() {
  const history = useNavigate();
  function addTransection() {
    history('/ledger')
  }
  function toTransferPage() {
    history('/transfer')
  }
  return (
    <div>
      <div>
        <h4>ใช้จ่ายทั่วไป</h4>
      </div>
      <div>
        <h1 className='text-primary'>10,000 บาท</h1>
      </div>
      <h5>
        ประวัติการใช้จ่าย
      </h5>
      <div className='line'>
      </div>
      <div>
        <div className='mb-2'>04/02/2566</div>
        <ListTransection />
      </div>
      <div className='position-footer'>
        <div className="d-grid gap-2 my-2">
          <button onClick={toTransferPage} className='btn btn-outline-primary'>โอนเงิน</button>
          <button onClick={addTransection} className='btn btn-primary'>+ Add Transection</button>
        </div>
      </div>
    </div>
  );
}

export default PageWallet;
