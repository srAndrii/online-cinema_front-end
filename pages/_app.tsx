import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainProvider from '../app/components/providers/MainProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>

  )
}


export default MyApp
