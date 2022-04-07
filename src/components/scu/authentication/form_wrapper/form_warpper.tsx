import { Grid, Divider, Hidden } from '@mui/material'
// import { logoWithText } from '@public'
import React from 'react'
import PropTypes from 'prop-types'
import styles, { StyledGrid } from './style'

export const FormWrapper = (props: {
  children: JSX.Element | JSX.Element[]
  rightSideDivider?: boolean
}): JSX.Element => {
  return (
    <StyledGrid item sm={12} md={6}>
      <Hidden mdDown>
        <Divider
          orientation="vertical"
          className='divider'
          style={{ float: props.rightSideDivider ? 'right' : 'left' }}
        />
      </Hidden>
      <Grid className='container'>
        <Grid container className='innerContainer' alignItems="center">
          <Grid container alignItems="center" justify="center">
            {/* <img src={logoWithText} alt="" /> */}
          </Grid>
          {props.children}
        </Grid>
      </Grid>
    </StyledGrid>
  )
}
FormWrapper.prototype = {
  children: PropTypes.node.isRequired,
}
