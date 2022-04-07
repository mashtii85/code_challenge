import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  ActionType,
  store,
} from '../../../../components/daroox/context_provider'
import { DocumentProvider } from '@daroox'

const Company = (): JSX.Element => {
  const router = useRouter()
  const { companyId }: { companyId?: string } = router.query
  const { dispatch } = useContext(store)
  useEffect(() => {
    dispatch({
      type: ActionType.SET_SELECTED_COMPANY_ID,
      payload: { selectedCompanyId: parseInt(companyId) },
    })
  }, [router.query.companyId])
  return (
    <div>
      <DocumentProvider />
    </div>
  )
}

export default Company
