// Next
import type { NextPage } from 'next'
//Styles
import Styled from 'styled-components'
//UI
import { Home } from '../components/home'
import { Container } from '@mui/material'

// db
import {db, Playlist} from '../db'

export const StyledContainer = Styled(Container)`
  border:1px dashed red;
  background-color:red;
`
export interface IHomeProps{
  playlist:Playlist[]
  genres:string[]
}

const HomePage: NextPage<IHomeProps> = (props:IHomeProps) => {
  return (
    <Home {...props} />
  )
}

HomePage.getInitialProps=(_):IHomeProps=>{
  const {playlist,allGenre} = db

  return {
    genres:allGenre,
    playlist
  }
}

export default HomePage
