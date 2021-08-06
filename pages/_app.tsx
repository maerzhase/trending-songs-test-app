import type { AppProps } from 'next/app'
import { Provider } from 'mobx-react'
import { useStoresForProviders } from '../stores/index'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { dataStore } = useStoresForProviders(pageProps.initialState)
  return (
    <Provider dataStore={dataStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
