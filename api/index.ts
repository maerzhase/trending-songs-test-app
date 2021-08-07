import axios from 'axios'
import ISong from '../stores/models/Song'

// TODO: This should be configured via env and actually not comitted
const API_BASE_PATH = 'https://api-stg.jam-community.com'
const API_KEY = '___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8'

const api = axios.create({
  baseURL: API_BASE_PATH,
})

export async function getSongsTrending(): Promise<ISong[]> {
  try {
    const response = await api.get('/song/trending').then((r) => r.data)
    return response
  } catch (e) {
    console.warn(e)
  }
}

export async function postSongLike(song: ISong): Promise<any> {
  try {
    const params = new URLSearchParams()
    params.append('id', song.id)

    const response = await api
      .post(`/interact/like?apikey=${API_KEY}`, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((r) => r.data)
    return response
  } catch (e) {
    console.warn(e)
  }
}

export async function postSongUnlike(song: ISong): Promise<any> {
  try {
    const params = new URLSearchParams()
    params.append('id', song.id)

    const response = await api
      .post(`/interact/unlike?apikey=${API_KEY}`, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((r) => r.data)
    return response
  } catch (e) {
    console.warn(e)
  }
}
