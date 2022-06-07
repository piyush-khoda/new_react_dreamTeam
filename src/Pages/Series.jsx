import React from 'react'
import Navbar from './Navbar'
import './Series.css'
import { Outlet, Link } from "react-router-dom"

function Series() {
  return (
    <>
        <Navbar />
        
            <div className='series'>
            <h1  className='seriesTitle' > Rankings </h1>
            </div>
            <div className='seriesList'>
                <p className='seriesContent'>League match series </p><hr />
                <p className='seriesContent'>ICC Men Test series </p><hr />
                <p className='seriesContent'>ICC Men ODI series </p><hr />
                <p className='seriesContent'>ICC Men T20 series  </p><hr />
                <p className='seriesContent'>ICC Women Test series </p><hr />
                <p className='seriesContent'>ICC Women ODI series </p><hr />
                <p className='seriesContent'>ICC Women T20 series  </p><hr />
            </div>
        

    </>
  )
}

export default Series