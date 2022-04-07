import React, { useContext, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  CircularProgress,
  Input,
  Container,
  TextField,
} from '@mui/material'

import { useForm } from 'react-hook-form'
import { ActionType, store } from '../context_provider'
import { ICredentialReqModel } from '../models'
import { loginResolver } from './validation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledContainer } from './style'

export const LoginForm = (): React.ReactElement => {
  const { handleSubmit, register, formState: { errors } } = useForm<ICredentialReqModel>({
    resolver: loginResolver,
    mode: 'onSubmit',
  })

  const authorizeStore = useContext(store)
  const { dispatch, state } = authorizeStore


  const onSubmit = async (values: ICredentialReqModel) => {
    const credentials: ICredentialReqModel = {
      grant_type: 'PASSWORD',
      username: values.username,
      password: values.password,
    }
    
    dispatch({ type: ActionType.GET_TOKEN, payload: credentials })
  }

  return (
    <StyledContainer fluid >
      <Grid
        className='border'
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center" >
        <Grid xs={2} />
        <Grid item xs={8} spacing={2}>
          <Card >
            <Box padding={10} >
              <form onSubmit={handleSubmit(onSubmit)}  >
                <Box justifyContent={'center'} alignItems={'center'} m="auto" display="flex"

                // width={500} height={80}
                >
                  <TextField
                    fullWidth
                    variant='outlined'
                    sx={{
                      margin: 2,
                    }}
                    // defaultValue={
                    //   credentials.username && credentials.username.length > 0
                    //     ? credentials.username
                    //     : ''
                    // }
                    {...register('username')}
                    error={errors.username && errors.username?.message !== ''}
                    helperText={
                      errors.username && (
                        <Typography color="error">{errors.username.message}</Typography>
                      )
                    }
                    // icon={
                    //   <FontAwesomeIcon icon={faUserCircle} className={'icon'} />
                    // }
                    placeholder={'User name'}

                  />
                </Box>

                 <Box justifyContent={'center'} alignItems={'center'} m="auto" display="flex">
                  <TextField
                    fullWidth
                    sx={{
                      margin: 2
                    }}

                    // defaultValue={credentials.password}
                    {...register('password')}
                    error={errors.password && errors.password?.message !== ''}
                    helperText={
                      errors.password && (
                        <Typography color="error">{errors.password.message}</Typography>
                      )
                    }
                    // icon={<FontAwesomeIcon icon={faLock} className={'icon'} />}
                    placeholder={'Password'}
                    inputProps={{
                      autoComplete: 'new-password',
                      type: 'password',
                      form: {
                        autoComplete: 'off',
                      },
                    }}
                  />
                </Box>


                <Box justifyContent={'center'} alignItems={'center'} m="auto" display="flex">
                  <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  >
                    {state.loading ? (
                      <CircularProgress color="primary" size="5%" />
                    ) : (
                      <Typography>{'Login'}</Typography>
                    )}
                  </Button>
                </Box>
              </form>
            </Box>
          </Card>

        </Grid >
        <Grid xs={2} />
      </Grid>

    </StyledContainer>
  )
}

