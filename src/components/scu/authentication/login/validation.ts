import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { ICredentialReqModel } from '../models'

const schema = object().shape({
  username: 
    string()
    .trim()
    .required()
    .min(2)
    .max(12),
  password:string().required(),
})

export const loginResolver = yupResolver<any>(schema)
