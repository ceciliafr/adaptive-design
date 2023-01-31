import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Title>Change your <span>device</span> using browser inspect</Title>
      </main>
    </>
  )
}