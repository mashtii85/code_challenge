import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ActionType, store } from '../../components/daroox/context_provider'
import { CampaignCarousel } from '@daroox'

const Home: React.FC = () => {
  const router = useRouter()
  const { dispatch } = useContext(store)
  useEffect(() => {
    dispatch({
      type: ActionType.REMOVE_SELECTED_COMPANY,
    })
  }, [router.query.companyId])
  return <CampaignCarousel />
}

export default Home
