import React from 'react'
import IArtist from '../stores/models/Artist'

interface ArtistProps {
  artist: IArtist
}

const Artist = (props: ArtistProps): JSX.Element => {
  const { artist } = props

  return (
    <div>
      <h2>{artist.name}</h2>
    </div>
  )
}

export default Artist
