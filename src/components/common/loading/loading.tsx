import React, { useContext } from 'react'
import { Grid, CircularProgress } from '@mui/material'
import  { StyledGrid } from './style'
import { appStore } from '../app_provider'
// import { appStore } from '@common'

export const Loading = (): JSX.Element => {
  const store = useContext(appStore)
  const { state } = store


  return (
    state.loading ? (
      <StyledGrid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid
          style={{
            position: 'absolute',
          }}
        >
          <CircularProgress size="40%" color="primary" />
        </Grid>
      </StyledGrid>
    ):<></>
  )
}
