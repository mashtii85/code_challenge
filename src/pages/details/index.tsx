// Next
import type { NextPage } from 'next'
//Styles
import Styled from 'styled-components'
//UI
import { Details } from '../../components/details'
import { Container } from '@mui/material'

// db
import {db} from '../../db'
import { IDetailsProps } from '../../components/details/types'

export const StyledContainer = Styled(Container)`
  border:1px dashed red;
  background-color:red;
`

const DetailsPage: NextPage<IDetailsProps> = (props:IDetailsProps) => {
  return (
    <Details {...props} />
  )
}

DetailsPage.getInitialProps=(_):IDetailsProps=>{
  const {playlist,allGenre} = db

  return {
    genres:allGenre,
    playlist,
  }
}

export default DetailsPage
