/*
  Components - Home - Genre - Index
*/

import { Button, Grid, Paper, Typography } from '@mui/material'
import { StyledBox } from './styles'
import { IGenreProps } from './types'

export const Genre = ({ genres, selectedGenre, setGenre }: IGenreProps) => {
  const handleGenreChange = (value: string) => {
    setGenre(value)
  }

  return (
    <StyledBox padding={2}>
      <Grid item alignContent="center" display="flex">
        {genres.map((genreItem, index) => {
          return (
            <Paper className="paper" key={index} elevation={3}>
              <Button
                variant={selectedGenre === genreItem ? 'contained' : 'outlined'}
                onClick={() => handleGenreChange(genreItem)}
              >
                <Typography>{genreItem}</Typography>
              </Button>
            </Paper>
          )
        })}
      </Grid>
    </StyledBox>
  )
}
