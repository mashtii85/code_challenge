import { LocalStorageTypes } from '../config/constans'
import { ICredentialResModel } from '../components/scu/authentication/models/response_models'
import { IBaseResModel, IMessage, api, MessageType } from '../config'
import CommonService from './common_service'
import { ICredentialReqModel } from '../components/scu/authentication/models'
import {db} from '../db'

interface IHttpAction {
  method: string
  headers: IHeaders
  body?: string
}

interface IHeaders {
  'Content-Type': string
  Accept: string
  Authorization: string
}

class APIService {
  baseUrl: string
  _token: string = undefined
  _auth: ICredentialResModel
  header: IHeaders = {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  postAction: IHttpAction = {
    method: 'POST',
    headers: this.header,
  }
  private static _instance // = new APIService()
  // _commonService = new CommonService()
  // appStore = useContext(store)
  public static refreshPromise = null

  constructor() {
    if (APIService._instance) {
      return APIService._instance
    }

    this.baseUrl = process.env.BASE_API
    APIService._instance = this
    return this
  }

  private setAuthentication = () => {
    this._auth = new CommonService().getTokenFromLocalStorage()
    this._token = this._auth
      ? `${this._auth.token_type} ${this._auth.access_token}`
      : undefined
    // this.header.Authorization = this?._token
  }

  public async getCredential(body: ICredentialReqModel): Promise<Partial<ICredentialResModel>> {
    
    try {
    const {credential} = db
    if(body.username==credential.userName&&credential.password==credential.password){
      return{
        message:"success"
      }
    }
        return {message:"user name or password is wrong",access_token:"logged_in"}
      
    } catch (e) {
      return {message:JSON.stringify(e)}
    }
  }

  private refreshToken = async <T>(
    response: Response,
    header: any,
  ): Promise<IBaseResModel<T>> => {
    if (response.status === 401) {
      const stringModel = `refresh_token=${this._auth.refresh_token.trim()}&token=${
        this._token
      }&grant_type=refresh_token`

      if (APIService.refreshPromise == null) {
        APIService.refreshPromise = this.getCredential(stringModel).then(
          (credentials) => {
            APIService.refreshPromise = null
            return credentials
          },
        )
      }
      await APIService.refreshPromise
      const credential = new CommonService().getTokenFromLocalStorage()

      // const credential = await this.getCredential(stringModel)

      if (credential && credential.access_token) {
        const s = header
        s.headers.Authorization = this._token
        const _response = await fetch(response.url, header)
        const baseModel: IBaseResModel<T> = await _response.json()
        return baseModel
      } else {
        const message: IMessage = {
          text: response.statusText,
          type: MessageType.FAILURE,
        }
        const baseResModel: IBaseResModel<undefined> = {
          statusCode: BaseServiceError.CATCH,
          message: [message],
          payloads: undefined,
          success: false,
        }
        return baseResModel
      }
    } else if (response.status === 404) {
      const message: IMessage = {
        text: response.statusText,
        type: MessageType.FAILURE,
      }
      const baseResModel: IBaseResModel<undefined> = {
        statusCode: BaseServiceError.CATCH,
        message: [message],
        payloads: null,
        success: false,
      }
      return baseResModel
    } else {
      try {
        const response1: IBaseResModel<T> = await response.json()
        return response1
      } catch (e) {
        const message: IMessage = {
          text: e.message,
          type: MessageType.FAILURE,
        }
        const baseResModel: IBaseResModel<undefined> = {
          statusCode: BaseServiceError.CATCH,
          message: [message],
          payloads: undefined,
          success: false,
        }
        return baseResModel
      }
    }
  }

  public async get<T>(
    url: string,
    queryString?: string,
  ): Promise<IBaseResModel<T>> {
    if (!this._auth) {
      this.setAuthentication()
    }
    const header = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this._token,
      },
    }
    const response = await fetch(this.baseUrl + url + queryString, header)
    const baseModel = await this.refreshToken<T>(response, header)
    return baseModel
  }

  async post<T>(url: string, body?: unknown): Promise<IBaseResModel<T>> {
    // this.appStore.dispatch({ type: ActionType.LOADING })
    if (!this._auth) {
      this.setAuthentication()
    }
    const jsonBody = JSON.stringify(body)
    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this._token,
      },
      body: jsonBody,
    }

    const jsonResponse = await fetch(this.baseUrl + url, header)
    const baseModel = await this.refreshToken<T>(jsonResponse, header)
    return baseModel
  }

  public async put<T>(url: string, body?: unknown): Promise<IBaseResModel<T>> {
    // this.appStore.dispatch({ type: ActionType.LOADING })
    if (!this._auth) {
      this.setAuthentication()
    }
    // this._token = localStorage[LocalStorageTypes.JWT]
    //   ? JSON.parse(localStorage[LocalStorageTypes.JWT]).access_token
    //   : ''

    const header = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this._token,
      },
      // body:
      //   '{"shopSplyDocumentID":645,"shopSplyDocumentDetailID":191258,"shopSplyDocumentDetailQty":6}',
      body: JSON.stringify(body),
    }
    const response = await fetch(this.baseUrl + url, header)
    const baseModel = await this.refreshToken<T>(response, header)
    // this.appStore.dispatch({ type: ActionType.LOADED })
    return baseModel
  }

  async delete<T>(url: string, body?: unknown): Promise<IBaseResModel<T>> {
    // this.appStore.dispatch({ type: ActionType.LOADING })
    if (!this._auth) {
      this.setAuthentication()
    }
    const jsonBody = JSON.stringify(body)
    const header = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this._token,
      },
      body: jsonBody,
    }
    const jsonResponse = await fetch(this.baseUrl + url, header)
    const baseModel = await this.refreshToken<T>(jsonResponse, header)
    return baseModel
  }
}

enum BaseServiceError {
  CATCH,
  INVALID_GRANT,
}

export default APIService
