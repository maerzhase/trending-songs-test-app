import Head from 'next/head'
// import Image from 'next/image'
import { GetServerSideProps } from 'next'
import Song from '../components/Song'
import useStores, { getStoreInstances } from '../stores/index'

export const Home = (): JSX.Element => {
  const { dataStore } = useStores()
  return (
    <div className="container">
      <Head>
        <title>Loudly Trending Songs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {dataStore.songs.map((s) => (
          <Song key={s.id} song={s} withArtist />
        ))}
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

export default Home
