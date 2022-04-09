import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, SchemaOf } from 'yup'

const schema = object().shape({
  comment: string().trim().required()
})

export const commentResolver = yupResolver<any>(schema)
