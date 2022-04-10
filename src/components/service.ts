/*
  Components - Service
*/

import { IPlaylist } from '../../types'
import { db } from '../db'

export class Service {
  getPlaylist = (): IPlaylist[] => {
    const { playlist } = db

    return playlist
  }

  getGenres = (): string[] => {
    const { allGenre } = db
    return allGenre
  }
}
