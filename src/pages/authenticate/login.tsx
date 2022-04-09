import React from 'react'
import { AuthenticateSkeleton, FormWrapper, LoginForm } from '../../components'
// import {
//   AuthenticateSkeleton,
//   AuthenticateSlider,
//   FormWrapper,
//   LoginForm,
// } from 'src/components/scu'

export default function Login(): React.ReactElement {
  return (
    // <AuthenticateSkeleton>
      <FormWrapper rightSideDivider={true}>
        <LoginForm />
      </FormWrapper>
    // </AuthenticateSkeleton>
  )
}
