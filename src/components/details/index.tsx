/*
  Components - Details - Index
*/

import { Box, Grid, ImageList, Paper, Typography } from '@mui/material'
import { IDetailsProps } from './types'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Comments } from './comments'
import { useDetails } from './hooks'
import { StyledContainer } from './styles'
import { MainContent } from './mainContent'
import { SuggestedVideos } from './suggestion'
import { IPlaylist } from '../../../types'

export const Details = ({ playlist }: IDetailsProps) => {
  const [list, setList] = useState<IPlaylist[]>([])

  const { selectedItem } = useDetails({ playlist, setList })

  return (
    <StyledContainer>
      <Grid container>
        <MainContent item={selectedItem!} />
        <Comments />
        <SuggestedVideos list={list} playlist={playlist} setList={setList} />
      </Grid>
    </StyledContainer>
  )
}
