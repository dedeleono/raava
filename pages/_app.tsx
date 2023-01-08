import React from "react";
import Head from "next/head";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/Navigation";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Raava</title>
        <meta name="Raava Furniture" content="Raava" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-latoBold relative h-screen py-24 px-12 lg:px-48 ">
        <Navigation activeId={router.route}/>
        <AnimatePresence initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
      <Footer/>
    </>
  )
}
