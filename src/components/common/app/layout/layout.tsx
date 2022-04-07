import React, { useContext, useEffect } from 'react'
import { DarooxLayoutProvider } from '../../../daroox/layout'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { store } from '../../../scu/authentication/context_provider/store'

interface Props {
  children: JSX.Element
}
const LayoutProvider = ({ children }: Props): JSX.Element => {
  const { state } = useContext(store)
  useEffect(() => {
    if (state && state.curentUserId && state.curentUserId != null) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      const code = `
     
      window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ab3c9a65-2777-443a-9194-e0492e1242d3";
    (function() {
      if (document.querySelectorAll('head script[src="https://client.crisp.chat/l.js"]').length > 0) return;
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();`
      try {
        s.appendChild(document.createTextNode(code))
        document.body.appendChild(s)
      } catch (e) {
        s.text = code
        document.body.appendChild(s)
        console.log('crisp error')
      }
    }
  }, [state.curentUserId])
  const selectLayout = () => {
    if (useRouter().pathname.includes('daroox'))
      return (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ position: 'fixed' }}
        >
          <DarooxLayoutProvider>
            <>{children}</>
          </DarooxLayoutProvider>
        </Grid>
      )
    else return <>{children}</>
  }
  return <>{selectLayout()}</>
}

export default LayoutProvider
