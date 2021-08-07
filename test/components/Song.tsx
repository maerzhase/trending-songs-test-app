import React from 'react'
import { render } from '../testUtils'
import { getStoreInstances } from '../../stores/index'
import Song from '../../components/Song'

const { dataStore } = getStoreInstances(null)

const initStores = async () => {
  await dataStore.initialize()
  return {}
}

describe('Song Component', () => {
  it('to render name', () => {
    return initStores().then(() => {
      const song = dataStore.songs[0]
      const { getByText } = render(<Song song={song} />, {})
      const nameElement = getByText(song.name)
      expect(nameElement).toBeTruthy()
    })
  })
})
