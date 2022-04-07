import React from 'react'
import {
  AuthenticateSkeleton,
  AuthenticateSlider,
  FormWrapper,
  LoginForm,
} from 'src/components/scu'

export default function Login(): React.ReactElement {
  return (
    <AuthenticateSkeleton>
      <AuthenticateSlider />
      <FormWrapper rightSideDivider={true}>
        <LoginForm />
      </FormWrapper>
    </AuthenticateSkeleton>
  )
}
