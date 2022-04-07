import React from 'react'
// import { Button } from '@mui/material'
// import { useRouter } from 'next/router'
import { withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import { Link } from '../i18n'
import { navigation } from '@config'
import { useRouter } from 'next/router'
// import { withTranslation } from '../i18n'

const Home = ({ t }): JSX.Element =>
  //{ t }: any
  {
    const router = useRouter()
    if (typeof window !== 'undefined') router.push('/daroox')
    // const router = useRouter()
    return (
      <div>
        <h1>{t('hello')}</h1>
        {/* <Button onClick={() => router.push(navigation.index.home)}>
          داروکس
        </Button>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'fa' : 'en')
          }
        >
           {t('language')}
        </button> */}
        <Link href={navigation.index.home}>
          <a>Daroox</a>
        </Link>
        <p>
          <Link href={navigation.prescipt.home}>
            <a>Presciption</a>
          </Link>
        </p>
        <div>{t('hello')}</div>
      </div>
    )
  }

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// })
Home.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('common')(Home)
// export default Home
