import React from 'react';
import { useNavigate } from 'react-router-dom'
function PageAddWallet() {
  const history = useNavigate();
  function toPageHome() {
    history('/');
  }
  return (
    <div>
     <div className='mb-2'>
        <h4>เพิ่มกระเป๋าเงิน</h4>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="walletName" className="form-label">Name</label>
          <input type="email" className="form-control" id="walletName" />
        </div>
        <div className="mb-3">
          <label htmlFor="walletAmount" className="form-label">Amount</label>
          <input type="email" className="form-control" id="walletAmount" />
        </div>
        <div className="d-grid gap-2 my-2">
          <button onClick={toPageHome} type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default PageAddWallet;
