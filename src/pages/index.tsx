import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Channer from '../components/Banner/Channer'
import Deliver from '../components/Deliver'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div className=" ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Welcome />
      <Deliver />
      <Footer />

    </div>
  )
}

export default Home
