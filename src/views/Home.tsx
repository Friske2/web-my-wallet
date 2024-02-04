import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router'
import ListWallet from '../components/listWallet';
import { IWallet } from '../interface/IWallet';
import { getWallets } from '../services/walletService'
function PageHome() {
  const history = useNavigate();
  const [wallets, setWallets] = useState<IWallet[]>([]);
  useEffect(() => {
    getWallets().then((res) => {
      setWallets(res);
    });
  },[])
  const total = wallets.reduce((acc, item) => acc + item.balance, 0);
  function toAddWallet() {
    history('/wallet/add');
  }
  function toWalletDetail(id:number) {
    history('/wallet/'+id);
  }
  return (
    <div>
      <div>
        <h4>ยอดเงินทั้งหมด</h4>
      </div>
      <div>
        <h1 className='text-primary'>{total} บาท</h1>
      </div>
      <h5>
        รายการกระป๋าเงิน
      </h5>
      <div className='line'>
      </div>
      <ListWallet items={wallets} handleClick={toWalletDetail} />
      <div className='position-footer'>
        <div className="d-grid gap-2 my-2">
          <button onClick={toAddWallet} className='btn btn-primary'>+ Add wallet</button>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
