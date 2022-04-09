/*
  Components - Details - Index
*/

import { Box, Button, Card, Container, Grid, ImageList, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import { IDetailsProps } from "./types"
import styled from 'styled-components'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GENRE, Playlist } from "../../db"
import { Comments } from "./comments"

export const Details = ({ genres, playlist }: IDetailsProps) => {
  const router = useRouter()
  const { query } = router

  const [list, setList] = useState<Playlist[]>([])
  const [selectedItem, setSelectedItem] = useState<Playlist>()

  useEffect(() => {
    if (query.id) {
      const selectItem = playlist.find(item => item.id === Number(query.id))
      const list = playlist.filter(item => item.genre.some(item => item === selectItem?.genre[0]) && item.id !== Number(query.id))
      setSelectedItem(selectItem)
      setList(list)
    } else {

    }

  }, [router.query])

  const handleCardClick = (value: Playlist) => {
    const list = playlist.filter(item => item.genre.some(item => item === value.genre[0]) && item.id !== Number(value.id))
    router.push({
      query: { id: value.id }
    })
    setList(list)
  }

  return <StyledContainer>
    <Grid container>
      <Grid item>
        {selectedItem?.url ?
          <Grid container>
            <Grid item md={12}>
              <video width='100%'
                id="video_player" src={selectedItem.url} className="video" />
            </Grid>
            <Grid md={12}>
              <Typography>{selectedItem.id}</Typography>
            </Grid>
          </Grid>
          : <Typography>video url not found</Typography>
        }
      </Grid>

      <Comments />
      <Grid item display="flex" flexDirection="row" maxHeight="100%" overflow="auto">
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateRows: "300px",
            gridTemplateColumns: "200px",
          }}>
          {list.map((item, index) => {
            const media = new Audio('videos/nature.mp4')

            return (
              <Card className="card" key={`${item.id}${index}`} onClick={() => handleCardClick(item)}>
                <Box padding={2}>
                  <Grid
                    container

                  >
                    <Grid item><video id="video_player" src={item.url} className="video" /></Grid>
                    <Grid item md={12}>
                      <Typography>duration: {media.duration}</Typography>
                    </Grid>
                    <Grid md={12}>
                      <Typography>{item.name}</Typography>
                    </Grid>
                    <Grid md={12}>
                      <Typography>{JSON.stringify(item.genre)}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            )

          })}
        </ImageList>
      </Grid>

    </Grid>
  </StyledContainer>
}

export const StyledContainer = styled(Container)`
  border:1px dashed red;
  .card{
      border:1px dashed green;
      margin-left:30px;
      width: 400px;
      padding: 0;
  }
  .video{
        width:100%;
        height:200px;
        margin:auto;
        border:1px dashed yellow;
      }
  .list{
    border: 1px dashed green;
  }

`
