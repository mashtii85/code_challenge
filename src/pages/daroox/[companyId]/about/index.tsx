import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  ActionType,
  store,
} from '../../../../components/daroox/context_provider'
import { CommonService } from '@services'
import { AboutProvider } from '@daroox'

const About = (): JSX.Element => {
  const router = useRouter()

  const { dispatch } = useContext(store)
  useEffect(() => {
    dispatch({
      type: ActionType.SET_SELECTED_COMPANY_ID,
      payload: {
        selectedCompanyId: CommonService.getSelectedCompanyId(router),
      },
    })
  }, [router.query.companyId])
  return (
    <AboutProvider companyId={CommonService.getSelectedCompanyId(router)} />
  )
}

export default About
