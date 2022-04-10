/*
  Components - Details - Types
*/

import { IPlaylist } from '../../../types'

export interface IDetailsProps {
  genres: string[]
  playlist: IPlaylist[]
}

export interface IPrepareListOutput {
  selectedItem?: IPlaylist
  list: IPlaylist[]
}

export interface IPrepareListProps {
  playlist: IPlaylist[]
  id: string
}
