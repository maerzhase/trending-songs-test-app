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
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

interface SongProps {
  song: ISong
  onPlay?(song: ISong): void
  onPause?(song: ISong): void
  onLike?(song: ISong): Promise<any>
  onUnlike?(song: ISong): Promise<any>
  activeSongId?: string
}

const Song = (props: SongProps): JSX.Element => {
  const { song, activeSongId, onPlay, onPause, onLike, onUnlike } = props
  const hasValidAudio = !!song.music_file_path && !!song.music_file_mimetype

  // TODO: This boolean is just a workaround to toggle like/unlike behaviour
  // in handleClickLikeButton, because there is no infromation if the song
  // was already liked by the current user
  const [isLiked, setIsLiked] = React.useState(false)
  const [isWaiting, setIsWaiting] = React.useState(false)

  const isActive = song.id === activeSongId
  const elevation = isActive ? 8 : 1

  const handleClickLikeButton = () => {
    if (isWaiting) return
    setIsWaiting(true)
    if (!isLiked) {
      onLike(song).then(() => {
        setIsLiked(true)
        setIsWaiting(false)
      })
    } else {
      onUnlike(song).then(() => {
        setIsLiked(false)
        setIsWaiting(false)
      })
    }
  }

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
            <IconButton color="primary" onClick={handleClickLikeButton}>
              <Badge color="secondary" badgeContent={song.likes}>
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
