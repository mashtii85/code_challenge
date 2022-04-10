// Next
import type { NextPage } from 'next'
//UI
import { Details } from '../../components/details'

import { IDetailsProps } from '../../components/details/types'
import { DetailsService } from '../../components/details/service'

const DetailsPage: NextPage<IDetailsProps> = (props: IDetailsProps) => {
  return <Details {...props} />
}

DetailsPage.getInitialProps = (_): IDetailsProps => {
  const service = new DetailsService()
  const genres = service.getGenres()
  const playlist = service.getPlaylist()

  return {
    genres,
    playlist
  }
}

export default DetailsPage
