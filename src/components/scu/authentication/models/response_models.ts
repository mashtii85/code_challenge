/* eslint-disable camelcase */
export interface ICredentialResModel {
  token_type: string
  expires_in: string
  refresh_token: string
  grant_type: string
  access_token: string
  message: string
  succeeded: boolean
  // remember
}
export interface IRegisterResModel {
  a: string
}
