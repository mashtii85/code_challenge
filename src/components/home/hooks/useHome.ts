/*
  Components - Home - Index
*/

import Router, { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { GENRE } from '../../../../constants'
import { IPlaylist } from '../../../../types'

export const useHome = ({
  genre,
  playlist,
  setGenre
}: {
  genre: string
  playlist: IPlaylist[]
  setGenre: Dispatch<SetStateAction<string>>
}): IPlaylist[] => {
  const router = useRouter()

  const [list, setList] = useState<IPlaylist[]>(playlist)

  useEffect(() => {
    const index = router.asPath.indexOf('#')
    if (index !== -1) {
      const genre = router.asPath.substring(index + 1)
      setGenre(genre)
    } else {
      setGenre(GENRE.All)
    }
  }, [])

  useEffect(() => {
    const list =
      genre == GENRE.All
        ? playlist
        : playlist.filter((item) => item.genre.some((item) => item === genre))
    Router.push({
      pathname: router.pathname,
      hash: genre
    })
    setList(list)
  }, [genre])

  return list
}
