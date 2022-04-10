/*
  Components - Home - Styles
*/

import { Container } from '@mui/material'
import Styled from 'styled-components'

export const StyledContainer = Styled(Container)`
    padding-top:5%;
    .group{
      border:1px solid green;
      width:100%;
      border-radius:2px;
      margin:auto;
      .paper{
        margin-left:10px;
      }
    }
    .content{
      margin-top:2%;

    }

`
