import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/material'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/fonts/font.css" />
          <link rel="stylesheet" href="/nprogress.css" />
          <link rel="stylesheet" href="/css/DatePicker.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          />
        </Head>
        <body
          dir="rtl"
          style={{
            backgroundColor: 'rgb(240,240,240)',
            margin: 0,
            minHeight: '100vh',
          }}
        >
          hi
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
