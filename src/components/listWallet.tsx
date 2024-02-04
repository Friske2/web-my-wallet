import React from "react";
import Circle from './circle';
function ListWallet(props: any) {
  function handleClick() {
    props.handleClick();
  }
  return (
    <div className='d-flex' onClick={handleClick}>
        <Circle />
        <div className='my-1 mx-2'>
          <div className='title'>ใช้จ่ายทั่วไป</div>
          <div className='sub-title'>10,000 บาท</div>
        </div>
      </div>
  );
}

export default ListWallet;