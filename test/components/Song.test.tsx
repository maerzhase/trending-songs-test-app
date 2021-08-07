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
  it('to render audio player when song has actual music_file_path', () => {
    return initStores().then(() => {
      const song = dataStore.songs[0]
      const { container } = render(<Song song={song} />, {})
      const playerElement = container.querySelector('audio')
      expect(playerElement).toBeTruthy()
    })
  })
  it('to NOT render audio player when music_file_path is missing in song', () => {
    return initStores().then(() => {
      const song = dataStore.songs[1]
      const { container } = render(<Song song={song} />, {})
      const playerElement = container.querySelector('audio')
      expect(playerElement).toBeFalsy()
    })
  })
})
