import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  store,
  ActionType,
} from '../../../../components/daroox/context_provider'
import { ProductNewsProvider } from '@daroox'
import { CommonService } from '@services'

const News = (): JSX.Element => {
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
      <ProductNewsProvider
        companyId={CommonService.getSelectedCompanyId(router)}
      />
    </div>
  )
}

export default News
