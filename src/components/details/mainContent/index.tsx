/*
  Components - Details - MainContent - Index
*/

import { Grid, Typography } from '@mui/material'
import { StyledGrid } from './styles'
import { IMainContentProps } from './types'

export const MainContent = ({ item }: IMainContentProps) => {
  return (
    <StyledGrid item className="main">
      {item?.url ? (
        <Grid container>
          <Grid item md={12} className="">
            <video width="100%" id="video_player" src={item.url} className="video" controls />
            <Grid md={12}>
              <Typography>{JSON.stringify(item.genre)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Typography>video url not found</Typography>
      )}
    </StyledGrid>
  )
}
