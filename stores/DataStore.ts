import { makeObservable, observable, action, toJS } from 'mobx'
import { getSongsTrending, postSongLike, postSongUnlike } from '../api/index'
import Song from './models/Song'

export interface IDataStore {
  songs: Song[]
  initialize(): Promise<Song[]>
  receiveSongs(songs: Song[]): void
  likeSong(song: Song): Promise<boolean>
  unlikeSong(song: Song): Promise<boolean>
  getSnapshot(): IDataStoreSnapshot
  hydrate(snapshot: IDataStoreSnapshot): void
}

interface IDataStoreSnapshot {
  songs: Song[]
}

class DataStore implements IDataStore {
  constructor() {
    makeObservable(this, {
      songs: observable,
      initialize: action,
      receiveSongs: action,
      likeSong: action,
      unlikeSong: action,
    })
  }

  public songs: Song[] = []

  public initialize = async (): Promise<Song[]> => {
    try {
      const songs = await getSongsTrending()
      this.receiveSongs(songs)
      return songs
    } catch (e) {
      console.warn(e)
    }
  }

  public receiveSongs = (songs: Song[]): void => {
    this.songs = songs
  }

  public likeSong = async (song: Song): Promise<boolean> => {
    try {
      await postSongLike(song)
      await this.initialize()
      return true
    } catch (e) {
      console.warn(e)
    }
  }

  public unlikeSong = async (song: Song): Promise<boolean> => {
    try {
      await postSongUnlike(song)
      await this.initialize()
      return true
    } catch (e) {
      console.warn(e)
    }
  }

  public getSnapshot = (): IDataStoreSnapshot => {
    const { hydrate, getSnapshot, ...dataStoreSnapshot } = this // eslint-disable-line
    return toJS(dataStoreSnapshot)
  }

  public hydrate = (snapshot: IDataStoreSnapshot): void => {
    if (snapshot.songs) this.songs = snapshot.songs
  }
}

export default DataStore
