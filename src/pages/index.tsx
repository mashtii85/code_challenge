// Next
import type { NextPage } from 'next'
//UI
import { Home } from '../components/home'

import { IPlaylist } from '../../types'
import { HomeService } from '../components/home/service'

export interface IHomeProps {
  playlist: IPlaylist[]
  genres: string[]
}

const HomePage: NextPage<IHomeProps> = (props: IHomeProps) => {
  return <Home {...props} />
}

HomePage.getInitialProps = (_): IHomeProps => {
  const service = new HomeService()
  const genres = service.getGenres()
  const playlist = service.getPlaylist()

  return {
    genres,
    playlist
  }
}

export default HomePage
