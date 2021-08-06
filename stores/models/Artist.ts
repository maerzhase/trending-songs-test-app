import IGenre from './Genre'

interface IArtist {
  artist_name: string
  country?: string
  cover_image_path: string
  created: string
  crews: Array<string>
  description?: number
  external_songs_count?: number
  external_videos_count?: number
  favorite_genres: Array<IGenre>
  favorites: number
  followers: number
  follows: number
  id: string
  liked: number
  location?: string
  muted: boolean
  name: string
  place?: string
  profile_image_path: string
  releases: number
  social_accounts: Array<string>
}

export default IArtist
