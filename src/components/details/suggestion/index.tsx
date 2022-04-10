/*
  Components - Details - Suggestion - Index
*/

import { Box, Grid, ImageList, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { IPlaylist } from '../../../../types'
import { StyledGrid } from './styles'
import { ISuggestedVideosProps } from './types'

export const SuggestedVideos = ({ playlist, list, setList }: ISuggestedVideosProps) => {
  const router = useRouter()
  const { query } = router

  const handleCardClick = (value: IPlaylist) => {
    const list = playlist.filter(
      (item) => item.genre.some((item) => item === value.genre[0]) && item.id !== Number(value.id)
    )
    router.push({
      query: { ...query, id: value.id }
    })
    setList(list)
  }

  return (
    <StyledGrid item display="flex" flexDirection="row" maxHeight="100%" overflow="auto">
      <ImageList
        sx={{
          gridAutoFlow: 'column',
          gridTemplateRows: '340px',
          gridTemplateColumns: '200px',
          paddingTop: '30px',
          paddingBottom: '30px'
        }}
      >
        {list.map((item, index) => {
          return (
            <Paper
              sx={{
                padding: 2
              }}
              className="card"
              key={`${item.id}${index}`}
              onClick={() => handleCardClick(item)}
              elevation={6}
            >
              <Box padding={2}>
                <Grid container>
                  <Grid item>
                    <video id="video_player" src={item.url} className="smallVideo" />
                  </Grid>

                  <Grid md={12}>
                    <Typography>{item.name}</Typography>
                  </Grid>
                  <Grid md={12}>
                    <Typography>{JSON.stringify(item.genre)}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          )
        })}
      </ImageList>
    </StyledGrid>
  )
}
