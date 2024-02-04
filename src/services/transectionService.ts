import transections from '../mock/transections.json'
import { ITransection } from "../interface/ITransection";

export function getTransections():Promise<ITransection[]>{
  // implement getTransections
  return new Promise((resolve, reject) => {
    resolve(transections)
  })
}