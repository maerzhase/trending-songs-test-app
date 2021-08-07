import Head from 'next/head'
// import Image from 'next/image'
import { observer } from 'mobx-react'
import { GetServerSideProps } from 'next'
import Box from '@material-ui/core/Box'
import Song from '../components/Song'
import useStores, { getStoreInstances } from '../stores/index'

export const Home = (): JSX.Element => {
  const { dataStore, uiStore } = useStores()

  const handlePlaySong = (song) => {
    uiStore.setActiveSongId(song.id)
  }

  const handlePauseSong = () => {
    uiStore.setActiveSongId(null)
  }

  return (
    <div className="container">
      <Head>
        <title>Loudly Trending Songs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box display="flex" flexWrap="wrap">
          {dataStore.songs.map((s) => (
            <Song
              key={s.id}
              song={s}
              onPlay={handlePlaySong}
              onPause={handlePauseSong}
              activeSongId={uiStore.activeSongId}
            />
          ))}
        </Box>
      </main>

      <footer></footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { dataStore } = getStoreInstances(null)
  await dataStore.initialize()
  return {
    props: {
      initialState: {
        dataStore: dataStore.getSnapshot(),
      },
    },
  }
}

export default observer(Home)
