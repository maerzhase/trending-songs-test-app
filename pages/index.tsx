import Head from 'next/head'
// import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { getSongsTrending } from '../api/index'
import Song from '../components/Song'

export const Home = (props): JSX.Element => {
  console.log(props) // eslint-disable-line
  return (
    <div className="container">
      <Head>
        <title>Loudly Trending Songs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.songs.map((s) => (
          <Song key={s.id} song={s} withArtist />
        ))}
      </main>

      <footer></footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const songs = await getSongsTrending()
  return {
    props: {
      songs,
    },
  }
}

export default Home
