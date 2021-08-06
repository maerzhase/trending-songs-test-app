import axios from 'axios'
import ISong from '../stores/models/Song'

const API_BASE_PATH = 'https://api-stg.jam-community.com'

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
