import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Live_matches_detail from './Live_matches_detail'

function Home() {
  return (
    <>
      <Navbar />
      <Live_matches_detail />
      <Card />
    </>
  )
}

export default Home