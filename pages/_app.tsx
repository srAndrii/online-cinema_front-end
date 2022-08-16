import '../app/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import MainProvider from '../app/components/providers/MainProvider'
import { TypeComponentAuthFields } from '../app/shared/types/auth.types'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
  return (
      <MainProvider Component={Component}>
        <Component {...pageProps} />
      </MainProvider>

  )
}


export default MyApp
