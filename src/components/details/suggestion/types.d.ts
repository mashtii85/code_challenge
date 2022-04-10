/*
  Components - Details - Suggestion - Types
*/

import { Dispatch, SetStateAction } from 'react'
import { IPlaylist } from '../../../../types'

export interface ISuggestedVideosProps {
  playlist: IPlaylist[]
  list: IPlaylist[]
  setList: Dispatch<SetStateAction<IPlaylist[]>>
}
