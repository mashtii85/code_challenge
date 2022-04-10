import React from 'react'
import { FormWrapper, LoginForm } from '../../components'

export default function Login(): React.ReactElement {
  return (
    <FormWrapper rightSideDivider={true}>
      <LoginForm />
    </FormWrapper>
  )
}
