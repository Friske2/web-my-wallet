export interface IWalletTransection {
  date: string
  transections: ITransection[]
}

export interface ITransection {
  id: number
  amount: number
  date: string
  type: string
  name: string
}
