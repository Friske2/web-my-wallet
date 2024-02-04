import React from "react";
import Circle from './circle';
function ListTransection(props: any) {
  function handleClick() {
    props.handleClick();
  }
  return (
    <div className='d-flex' onClick={handleClick}>
        <Circle />
        <div className='my-1 mx-2'>
          <div className='title text-success'>+ 5,000 บาท</div>
          <div className='sub-title'>เงินเดือน</div>
        </div>
      </div>
  );
}

export default ListTransection;