import { Grid,  } from '@mui/material'
import styled from 'styled-components'



export const StyledGrid = styled(Grid)`
  .container {
    background-repeat: 'no-repeat';
    background-size: 'cover';
  }
  .innerContainer { max-width: 450; margin: auto };
  .divider {
    height: 'calc(100vh - 20vh)';
    background-color: '#dedede';
    width: 2;
  }
`