import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'
import { useRouter } from 'next/router'
import { navigation } from '../../../config'

export const BottomNavigation = (): JSX.Element => {
  const router = useRouter()
  return (
    <Grid container justify="space-between">
      <Button
        variant="contained"
        fullWidth
        color="primary"
        className="forgotButton"
        type="button"
        onClick={() => router.push(navigation.authenticate.signUp)}
      >
        <Typography>ثبت نام</Typography>
      </Button>
      <Box m={1} />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        className="forgotButton"
        type="button"
        onClick={() => router.push(navigation.authenticate.login)}
      >
        <Typography>ورود</Typography>
      </Button>
    </Grid>
  )
}
