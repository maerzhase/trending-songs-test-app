import React, { useState, useRef, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

interface IAudioPlayerProps {
  src: string
  duration: number
}

const AudioPlayer = (props: IAudioPlayerProps): JSX.Element => {
  const { src, duration } = props
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef: HTMLMediaElement = useRef(null)
  const intervalRef = useRef(null)

  const startProgressTimer = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false)
      } else {
        setProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  const onScrub = (value) => {
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startProgressTimer()
  }

  const handleToggleIsPlaying = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
        startProgressTimer()
      } else {
        clearInterval(intervalRef.current)
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    return () => {
      if (audioRef && audioRef.current) {
        audioRef.current.pause()
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div>
      <audio ref={audioRef}>
        <source src={src} />
        Your browser does not support the audio element.
      </audio>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleToggleIsPlaying}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <input
          type="range"
          value={progress}
          step="1"
          min="0"
          max={duration}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </Box>
    </div>
  )
}

export default AudioPlayer
