import Head from 'next/head'
// import Image from 'next/image'
import { getSongsTrending } from '../api/index'

export const Home = (props): JSX.Element => {
  console.log(props) // eslint-disable-line
  return (
    <div className="container">
      <Head>
        <title>Loudly Trending Songs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const songs = await getSongsTrending()
  return {
    props: {
      songs,
    },
  }
}

export default Home
