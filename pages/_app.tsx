import React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'mobx-react'
import CssBaseline from '../components/CssBaseline'
import theme from '../theme/index'
import { useStoresForProviders } from '../stores/index'
import { MuiThemeProvider } from '@material-ui/core/styles'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { dataStore } = useStoresForProviders(pageProps.initialState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <Provider dataStore={dataStore}>
        <>
          <CssBaseline />
          <Component {...pageProps} />
        </>
      </Provider>
    </MuiThemeProvider>
  )
}

export default MyApp
