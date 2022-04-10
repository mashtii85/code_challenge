/*
    Components - Details - Hooks - useDetails
  */

import { Dispatch, SetStateAction } from 'react'
import { IPlaylist } from '../../../../../types'

export interface IUseDetailsProps {
  playlist: IPlaylist[]
  setList: Dispatch<SetStateAction<IPlaylist[]>>
}
