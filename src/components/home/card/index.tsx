/*
  Components - Home - Card - Index
*/

import { Box, Grid, Link, Typography } from '@mui/material'
import { StyledCard } from './styles'
import { IVideoCardProps } from './types'

export const VideoCard = ({ item }: IVideoCardProps) => {
  return (
    <StyledCard className="card">
      <Link href={`/details?genre=${item.genre[0]}&id=${item.id}`}>
        <Box padding={2}>
          <Grid container direction="column" display="flex" className="innerContent">
            <video id="video_player" src={item.url} className="video" />
            <Grid item md={12}>
              <Typography>{item.name}</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>genres:{JSON.stringify(item.genre)}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </StyledCard>
  )
}
