import React from 'react'
import Image from 'next/image'
import Artist from './Artist'
import AudioPlayer from './AudioPlayer/index'
import ISong from '../stores/models/Song'

interface SongProps {
  song: ISong
  withArtist: boolean
}

const Song = (props: SongProps): JSX.Element => {
  const { withArtist, song } = props
  const hasValidAudio = !!song.music_file_path && !!song.music_file_mimetype
  return (
    <div>
      <h1>{song.name}</h1>
      <Image src={song.cover_image_path} width={200} height={200} />
      {withArtist && <Artist artist={song.artist} />}
      {hasValidAudio && (
        <AudioPlayer src={song.music_file_path} duration={song.duration} />
      )}
    </div>
  )
}

export default Song
