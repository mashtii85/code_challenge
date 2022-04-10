/*
  Components - Home - Genre - Styles
*/

import { Dispatch, SetStateAction } from 'react'

export interface IGenreProps {
  genres: string[]
  selectedGenre: string
  setGenre: Dispatch<SetStateAction<string>>
}
