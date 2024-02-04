import React from 'react';
import { useNavigate } from 'react-router-dom'
function PageTransfer() {
  const history = useNavigate();
  function toPageWallet() {
    history('/wallet/1');
  }
  return (
    <div>
     <div className='mb-2'>
        <h4>โอนเงิน</h4>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="transectionAmount" className="form-label">จำนวนเงิน</label>
          <input className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">กระเป๋าเงิน</label>
          <select className="form-select" defaultValue={'0'} >
            <option value='0'>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="transectionDate" className="form-label">วันที่</label>
          <input type="date" className="form-control" id="transectionDate" />
        </div>
        <div className="d-grid gap-2 my-2">
          <button onClick={toPageWallet} type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default PageTransfer;
