import { Grid } from '@mui/material'
import React from 'react'
import { SaleProvider, Content, RightSidebar } from '@sale'
import { colors } from '@config'

const Sale = (): JSX.Element => {
  return (
    <SaleProvider>
      <Grid
        container
        style={{ backgroundColor: colors.sale.grey, height: '100vh' }}
      >
        <RightSidebar />
        <Content />
      </Grid>
    </SaleProvider>
  )
}
export default Sale
