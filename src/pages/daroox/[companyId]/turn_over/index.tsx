import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  ActionType,
  store,
} from '../../../../components/daroox/context_provider'
import { TurnoverProvider } from '@daroox'
import { CommonService } from '@services'

const Turnover = (): JSX.Element => {
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
    <div>
      <TurnoverProvider
        companyId={CommonService.getSelectedCompanyId(router)}
      />
    </div>
  )
}

export default Turnover
