import { api, IBaseResModel } from '../../../../config'
import { APIService } from '../../../../services'
import { ICredentialReqModel, ICredentialResModel } from '../models'

class LoginService {
  async login(model: ICredentialReqModel): Promise<Partial<ICredentialResModel>> {
   
    const response = await new APIService().getCredential(model)
    return response
  }
  async forgetPassword(hixCode: string): Promise<IBaseResModel<unknown>> {
    const response = await new APIService().post(
      api.authenticate.forgetPassword + hixCode,
    )
    return response
  }
}
export default LoginService
