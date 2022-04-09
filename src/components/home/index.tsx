/*
  Components - Home - Index
*/

import { Box, Button, Card, Container, Grid, Link, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import Styled from 'styled-components'
import { GENRE, Playlist } from '../../db'
import { IHomeProps } from '../../pages'
import Vimeo from '@u-wave/react-vimeo'
// import Link from 'next/link'

export const Home = ({ genres, playlist }: IHomeProps) => {
  const router = useRouter()

  const [genre, setGenre] = useState<string>()
  const [list, setList] = useState<Playlist[]>(playlist)

  useEffect(() => {
    const index = router.asPath.indexOf('#')
    if (index !== -1) {
      const genre = router.asPath.substring(index + 1)
      setGenre(genre)
    } else {
      setGenre(GENRE.All)
    }
  }, [])

  const handleGenreChange = (value: string) => {
    setGenre(value)
  }

  useEffect(() => {
    const list = genre == GENRE.All ? playlist : playlist.filter((item) => item.genre === genre)
    Router.push({
      pathname: router.pathname,
      hash: genre
    })
    setList(list)
  }, [genre])

  return (
    <StyledContainer>
      <Grid container spacing={2} className="container" padding={2}>
        <Box padding={2} className="group">
          <Grid item alignContent="center" display="flex">
            {genres.map((genreItem, index) => {
              return (
                <Paper className="paper" key={index} elevation={3}>
                  <Button
                    variant={genre === genreItem ? 'contained' : 'outlined'}
                    onClick={() => handleGenreChange(genreItem)}
                  >
                    <Typography>{genreItem}</Typography>
                  </Button>
                </Paper>
              )
            })}
          </Grid>
        </Box>
        <Grid className="content" item flexWrap="wrap" display="flex" justifyContent="space-around">
          {list.map((item, index) => {
            const media = new Audio('videos/nature.mp4')

            return (
              <Card className="card" key={`${item.id}${index}`}>
                <Link href="#">
                  <Box padding={2}>
                    <Grid
                      container
                      spacing={3}
                      direction="column"
                      display="flex"
                      className="content"
                    >
                      <video id="video_player" src={item.url} className="video" />
                      <Grid item>
                        <Image width={100} height={100} src={'/image.jpg'} />
                      </Grid>
                      {media.duration}
                    </Grid>
                  </Box>
                </Link>
              </Card>
            )
          })}
        </Grid>
        {/* <Vimeo
  video="videos/nature.mp4"
  autoplay
/> */}
        {/* <video  controls src="videos/nature.mp4"></video> */}
      </Grid>
    </StyledContainer>
  )
}

export const StyledContainer = Styled(Container)`
    border:1px dashed red;
    height:100vh;

    .group{
      border:1px solid green;
      width:100%;
      border-radius:2px;
    }
    .paper{
      margin-left:10px;
    }
    .content{
      margin-top:2%;
      border: 1px solid green;
      .card{
      border:1px dashed green;
      margin-bottom:30px;
      .content{
      margin:auto;
      margin-bottom:30px;
      text-align:center;
      }
      .video{
        width:300px;
        height:200px
        margin:auto;
border:1px dashed yellow;
      }
    }
    }
.border{
  border:1px dashed red;
  width:100%;
}

`
