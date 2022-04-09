/*
  Components - Details - Index
*/

import { Box, Button, Card, Container, Grid, ImageList, List, ListItem, Paper, TextField, Typography } from "@mui/material"
import styled from 'styled-components'
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { IComment } from "./types"
import { commentResolver } from "./validation"
import { useForm } from "react-hook-form"
import { store } from "../../scu"

export const Comments = () => {

  const { state: { token: { userName } } } = useContext(store)

  const { handleSubmit, register, formState: { errors } } = useForm<IComment>({
    resolver: commentResolver,
    mode: 'onSubmit',
  })

  const onSubmit = ({ comment }: IComment) => {
    setComments(preComments => ([...preComments, comment]))
    console.log(comments)
  }
  const [comments, setComments] = useState<string[]>([])


  return <Grid item md={12}>
    <form onSubmit={handleSubmit(onSubmit)}  >

      <Paper sx={{
        padding: 2
      }}>
        {
          comments.map(item => (<Box component="p" boxShadow="5 5 #888888" sx={{ p: 1, border: '1px solid grey', boxShadow: "1px 1px #888888", backgroundColor: "#ccc", borderRadius: 5 }}>
            <Typography>{userName} says: {item}</Typography>
          </Box>))
        }
        <Box padding={2}>
          <TextField
            variant='outlined'
            {...register('comment')}
            error={errors.comment && errors.comment?.message !== ''}
            helperText={
              errors.comment && (
                <Typography color="error">{errors.comment.message}</Typography>
              )
            }
            placeholder="write comment here..." fullWidth></TextField>
        </Box>

        <Box padding={2}>
          <Button variant="outlined" type="submit">Send</Button>
        </Box>

      </Paper>

    </form>
  </Grid>
}


