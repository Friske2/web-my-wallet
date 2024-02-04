import { IWallet } from '../interface/IWallet'
import wallets from '../mock/wallets.json'
export function getWallets():Promise<IWallet[]>{
  // implement getWallets
  return new Promise((resolve, reject) => {
    resolve(wallets)
  })
}