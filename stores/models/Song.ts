import IGenre from './Genre'
import IArist from './Artist'

interface ISong {
  id: string
  name: string
  name_seo: string
  artist: IArist
  artist_name: string
  duration: number
  bpm: number
  likes: number
  faves: number
  play: number
  reposts: number
  comments: number
  description: string
  tags?: Array<string>
  source_info: string
  cover_image_path: string
  cover_image_aspect_ratio?: string
  music_file_path: string
  song_genres: Array<IGenre>
  song_release: string
  mix_packs: Array<string>
}

export default ISong
