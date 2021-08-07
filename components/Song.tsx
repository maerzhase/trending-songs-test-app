import React from 'react'
import Image from 'next/image'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AudioPlayer from './AudioPlayer/index'
import ISong from '../stores/models/Song'

interface SongProps {
  song: ISong
  onPlay(song: ISong): void
  onPause(): void
  activeSongId: string
}

const Song = (props: SongProps): JSX.Element => {
  const { song, activeSongId, onPlay, onPause } = props
  const hasValidAudio = !!song.music_file_path && !!song.music_file_mimetype

  const isActive = song.id === activeSongId

  return (
    <Box m={2}>
      <Paper elevation={1}>
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
          <Image src={song.cover_image_path} width={200} height={200} />
          <Typography variant="h6">{song.name}</Typography>
          <Typography variant="body1">{song.artist_name}</Typography>
          {hasValidAudio && (
            <AudioPlayer
              src={song.music_file_path}
              duration={song.duration}
              onPlay={() => onPlay(song)}
              onPause={() => onPause(song)}
              isPlaying={isActive}
            />
          )}
        </Box>
      </Paper>
    </Box>
  )
}

export default Song
