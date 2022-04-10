/*
  Components - Home - Index
*/

import { Grid, Paper } from '@mui/material'
import { useState } from 'react'
import { IHomeProps } from '../../pages'
import { VideoCard } from './card'
import { Genre } from './genre'
import { useHome } from './hooks/useHome'
import { StyledContainer } from './styles'

export const Home = ({ genres, playlist }: IHomeProps) => {
  const [genre, setGenre] = useState<string>('')

  const list = useHome({ genre, playlist, setGenre })

  return (
    <StyledContainer>
      <Paper>
        <Grid
          container
          spacing={2}
          padding={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Genre genres={genres} selectedGenre={genre} setGenre={setGenre} />

          <Grid
            className="content"
            item
            flexWrap="wrap"
            display="flex"
            justifyContent="space-around"
          >
            {list.map((item, index) => {
              return <VideoCard key={`${item.id}${index}`} item={item} />
            })}
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  )
}
