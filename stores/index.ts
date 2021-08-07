import React, { useMemo } from 'react'
import DataStore, { IDataStore } from './DataStore'
import UiStore, { IUiStore } from './UiStore'
import { enableStaticRendering } from 'mobx-react'
import { MobXProviderContext } from 'mobx-react'

enableStaticRendering(typeof window === 'undefined')

declare global {
  interface Window {
    __ds: IDataStore
    __us: IUiStore
  }
}

interface IInitialState {
  dataStore: IDataStore
  uiStore: IUiStore
}

let ds, us

export const getStoreInstances = (
  initialState: IInitialState
): IInitialState => {
  const { dataStore } = initialState || {}
  const _dataStore = ds ?? new DataStore()
  const _uiStore = us ?? new UiStore()

  // _dataStore.connectStores({ uiStore: _uiStore });

  if (dataStore) _dataStore.hydrate(dataStore)

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined')
    return { dataStore: _dataStore, uiStore: _uiStore }

  // Create the stores once in the client
  if (!ds) ds = _dataStore
  if (!us) us = _uiStore

  if (global.window) {
    window.__ds = ds
    window.__us = us
  }

  return { dataStore: ds, uiStore: us }
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
