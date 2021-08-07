import React from 'react'
import Image from 'next/image'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// import FavoriteIcon from '@material-ui/icons/Favorite';
import AudioPlayer from './AudioPlayer/index'
import ISong from '../stores/models/Song'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
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
  const elevation = isActive ? 8 : 1

  return (
    <Box m={2}>
      <Paper elevation={elevation}>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          p={2}
        >
          <Image src={song.cover_image_path} width={200} height={200} />
          <Box display="flex" width="100%" mt={0.5}>
            <Box display="flex" flexDirection="column" flexGrow={1}>
              <Typography variant="subtitle1">{song.name}</Typography>
              <Typography variant="body2">{song.artist_name}</Typography>
            </Box>
            <IconButton color="primary">
              <Badge color="secondary" badgeContent={song.likes}>
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
          </Box>
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
