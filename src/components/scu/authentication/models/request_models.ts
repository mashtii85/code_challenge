export interface ICredentialReqModel {
  username: string
  password: string
  // eslint-disable-next-line camelcase
  grant_type: 'PASSWORD'|'REFRESH'
  remember?: boolean
}
export interface IRegisterReqModel {
  HixCode: string
  Mobile: string
  UserName: string
  Password: string
  matchPassword: string
  Email: string
  drugStoreName: string
}
