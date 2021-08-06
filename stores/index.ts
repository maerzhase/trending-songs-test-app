import React, { useMemo } from 'react'
import DataStore, { IDataStore } from './DataStore'
import { enableStaticRendering } from 'mobx-react'
import { MobXProviderContext } from 'mobx-react'

enableStaticRendering(typeof window === 'undefined')

declare global {
  interface Window {
    __ds: IDataStore
  }
}

interface IInitialState {
  dataStore: IDataStore
}

let ds

export const getStoreInstances = (
  initialState: IInitialState
): IInitialState => {
  const { dataStore } = initialState || {}
  const _dataStore = ds ?? new DataStore()

  // _dataStore.connectStores({ uiStore: _uiStore });

  if (dataStore) _dataStore.hydrate(dataStore)

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return { dataStore: _dataStore }

  // Create the stores once in the client
  if (!ds) ds = _dataStore

  if (global.window) {
    window.__ds = ds
  }

  return { dataStore: ds }
}

export function useStoresForProviders(
  initialState: IInitialState
): IInitialState {
  const stores = useMemo(() => getStoreInstances(initialState), [initialState])
  return stores
}

const useStores = (): Record<string, any> => {
  return React.useContext(MobXProviderContext)
}

export default useStores
