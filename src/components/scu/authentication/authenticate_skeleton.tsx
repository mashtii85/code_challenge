import { Grid } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

export const AuthenticateSkeleton = (props: {
  children: JSX.Element | JSX.Element[]
}): React.ReactElement => {
  return (
    <Grid container justify="center" alignItems="center">
      {props.children}
    </Grid>
  )
}
AuthenticateSkeleton.prototype = {
  children: PropTypes.node.isRequired,
}
