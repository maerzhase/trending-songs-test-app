import React from 'react'
import Artist from './Artist'
import Image from 'next/image'

import ISong from '../stores/models/Song'

interface SongProps {
  song: ISong
  withArtist: boolean
}

const Song = (props: SongProps): JSX.Element => {
  const { withArtist, song } = props
  return (
    <div>
      <h1>{song.name}</h1>
      {song.music_file_mimetype}
      <Image src={song.cover_image_path} width={200} height={200} />
      {withArtist && <Artist artist={song.artist} />}
      <audio controls>
        <source src={song.music_file_path} />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Song
