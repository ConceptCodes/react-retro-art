import Head from "next/head";
import { HeartIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Image from "next/image";

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
        <div className="flex justify-between pt-40 mb-5">
          <div className="text-2xl capitalize">latest artwork</div>
          <div className="uppercase text-xl">view all</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((x, index) => (
            <Image
              key={index}
              className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src="https://via.placeholder.com/300"
              width={200}
              height={300}
            />
          ))}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center font-bold"
          href="https://conceptcodes.dev"
        >
          Developed with{" "}
          <HeartIcon className="mx-2 text-red-600 h-5 animate-pulse inline-flex" />{" "}
          by ConceptCodes
        </a>
      </footer>
    </div>
  );
}
