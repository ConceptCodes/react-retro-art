import Head from 'next/head'
import { HeartIcon } from '@heroicons/react/solid'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 px-10">
      <Head>
        <title>Retro Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        <Header />
        <hr className="divide-y-4 divide-black divide-opacity-25"></hr>
        <Banner />

        {/* Lastest Art Work */}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center font-bold"
          href="https://conceptcodes.dev"
        >
          Developed with <HeartIcon className="mx-2 text-red-600 h-5 animate-pulse inline-flex" /> by ConceptCodes
        </a>
      </footer>
    </div>
  )
}
