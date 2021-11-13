import React from 'react'
import Head from 'next/head'

const Metadata = ({ title, desc }) => {
  return (
    <Head>
      <title>{!title ? 'Joshua Galinato' : `Joshua Galinato | ${title}`}</title>
      <link rel="icon" href="/logo.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Libre+Barcode+39&family=Lora&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default Metadata
