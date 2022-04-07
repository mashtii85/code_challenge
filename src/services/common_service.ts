import { ICredentialResModel } from '../components/scu/authentication/models/response_models'
import { NextRouter } from 'next/router'
import { LocalStorageTypes } from '../config'

class CommonService {
  //   static _instance = new CommonService()
  //   constructor() {
  //     if (!CommonService._instance) {
  //       return CommonService._instance
  //     }
  //     CommonService._instance = this
  //   }
  getTokenFromLocalStorage = (): ICredentialResModel | undefined => {
    const jsonResponse = localStorage.getItem(LocalStorageTypes.JWT)
    if (jsonResponse != null && jsonResponse.length > 0) {
      const response: ICredentialResModel = JSON.parse(jsonResponse)
      return response
    } else {
      return undefined
    }
  }
  setTokenToLocalStorage = (token: ICredentialResModel): void => {
    localStorage.setItem(LocalStorageTypes.JWT, JSON.stringify(token))
  }
  static stringifyDate = (date: number): string => {
    if (date) {
      const _date = date.toString()
      const stringDate =
        _date && _date.length == 8
          ? _date.substring(0, 4) +
          '/' +
          _date.substring(4, 6) +
          '/' +
          _date.substring(6)
          : '-'
      return stringDate
    }
    return '-'
  }
  static numberWithComma = (number: number): string => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
  }

 

 
}
export default CommonService
