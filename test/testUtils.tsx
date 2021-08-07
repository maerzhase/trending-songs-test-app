import { render } from '@testing-library/react'
import { useStoresForProviders } from '../stores/index'
import { Provider } from 'mobx-react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers =
  (initialState) =>
  ({ children }) => {
    const { dataStore } = useStoresForProviders(initialState)
    return <Provider dataStore={dataStore}>{children}</Provider>
  }

const customRender = (ui, { initialState = null, ...options }) => {
  return render(ui, { wrapper: Providers(initialState), ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
