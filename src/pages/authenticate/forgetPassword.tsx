import React from 'react'
import {
  AuthenticateSkeleton,
  AuthenticateSlider,
  FormWrapper,
  BottomNavigation,
  ForgotPasswordForm,
} from 'src/components/scu'
import { Box, Divider } from '@mui/material'

export default function ForgetPassword(): JSX.Element {
  return (
    <AuthenticateSkeleton>
      <AuthenticateSlider />
      <FormWrapper>
        <ForgotPasswordForm />
        <Box m={1} />
        <Divider style={{ width: '100%' }} />
        <Box m={1} />
        <BottomNavigation />
      </FormWrapper>
    </AuthenticateSkeleton>
  )
}
