import React from 'react'
import Artist from './Artist'

import ISong from '../stores/models/Song'

interface SongProps {
  song: ISong
}

const Song = (props: SongProps): JSX.Element => {
  const { withArtist, song } = props
  return (
    <div>
      <h1>{song.name}</h1>
      {withArtist && <Artist artist={song.artist} />}
    </div>
  )
}

export default Song
