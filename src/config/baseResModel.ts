export interface IBaseResModel<T> {
  statusCode: number
  targetUrl?: string
  success: boolean
  unAuthorizedRequest?: boolean
  message?: IMessage[]
  payloads: IPayload<T>
}
export interface IMessage {
  type: MessageType
  text: string
}
export interface IPayload<T> {
  results: T
}
export enum MessageType {
  SUCCESS,
  FAILURE,
  WARNING,
}
