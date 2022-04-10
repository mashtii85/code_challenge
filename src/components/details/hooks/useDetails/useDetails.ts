/*
    Components - Details - Hooks - useDetails
  */

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IPlaylist } from '../../../../../types'
import { DetailsService } from '../../service'
import { IUseDetailsProps } from './types'

export const useDetails = ({ playlist, setList }: IUseDetailsProps) => {
  const service = new DetailsService()
  const router = useRouter()

  const { query } = router

  const [selectedItem, setSelectedItem] = useState<IPlaylist>()

  useEffect(() => {
    if (query.id && typeof query.id === 'string') {
      const { list, selectedItem } = service.prepareList({ playlist, id: query.id })
      setSelectedItem(selectedItem)
      setList(list)
    }
  }, [router.query])

  return {
    selectedItem
  }
}
