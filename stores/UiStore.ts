import { makeObservable, observable, action } from 'mobx'

export interface IUiStore {
  activeSongId?: string
  setActiveSongId(id: string): void
}

class UiStore implements IUiStore {
  constructor() {
    makeObservable(this, {
      activeSongId: observable,
      setActiveSongId: action,
    })
  }

  public activeSongId?: string = null

  public setActiveSongId = (id: string): void => {
    this.activeSongId = id
  }
}

export default UiStore
