import React from 'react';
import Circle from '../components/circle';
function PageHome() {
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
      <div className='d-flex'>
        <Circle />
        <div className='my-1 mx-2'>
          <div className='title'>ใช้จ่ายทั่วไป</div>
          <div className='sub-title'>10,000 บาท</div>
        </div>
      </div>
      <div className="d-grid gap-2 my-2">
        <button className='btn btn-primary'>+ add wallet</button>
      </div>
    </div>
  );
}

export default PageHome;
