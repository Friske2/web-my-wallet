// import { useEffect } from "react";
import Circle from './circle';
import { IWallet } from "../interface/IWallet";
interface ListWalletProps {
  items: IWallet[];
  handleClick: (id:number) => void;
}
function ListWallet(props: ListWalletProps) {
  function handleClick(id:number) {
    props.handleClick(id);
  }
  if(props.items.length === 0) return (<div>ไม่มีข้อมูล</div>);
  else return (
    <div>
      {
         props.items.map((item) => {
          return (
          <div className='d-flex' key={item.id} onClick={()=> handleClick(item.id)}>
              <Circle />
              <div className='my-1 mx-2'>
                <div className='title'>{ item.name}</div>
                <div className='sub-title'>{item.balance} บาท</div>
              </div>
          </div>
          )
        })
      }
    </div>
  );
}

export default ListWallet;