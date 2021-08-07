import React from 'react'
import { render } from '../testUtils'
import { getStoreInstances } from '../../stores/index'
import Artist from '../../components/Artist'

const { dataStore } = getStoreInstances(null)

const initStores = async () => {
  await dataStore.initialize()
  return {}
}

describe('Artist Component', () => {
  it('to render name', () => {
    return initStores().then(() => {
      const artist = dataStore.songs[0].artist
      const { getByText } = render(<Artist artist={artist} />, {})
      const nameElement = getByText(artist.name)
      expect(nameElement).toBeTruthy()
    })
  })
})
