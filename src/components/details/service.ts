/*
  Components - Details - Service
*/

import { IPlaylist } from '../../../types'
import { Service } from '../service'
import { onlyUnique } from '../utility'
import { IPrepareListOutput, IPrepareListProps } from './types'

export class DetailsService extends Service {
  prepareList = ({ playlist, id }: IPrepareListProps): IPrepareListOutput => {
    const index = playlist.findIndex((item) => item.id === Number(id))
    if (index != -1) {
      const filteredList: IPlaylist[] = Object.assign([], playlist)
      const selectedItem: IPlaylist = filteredList.splice(index, 1)[0]

      const list: IPlaylist[][] = selectedItem.genre.map((first) => {
        const values = filteredList.filter((item) => item.genre.some((genre) => genre === first))
        return values
      })
      const unique = list.flat().filter(onlyUnique)

      return {
        selectedItem,
        list: unique
      }
    }
    return {
      selectedItem: null,
      list: []
    }
  }
}
