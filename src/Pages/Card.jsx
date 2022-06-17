import React from 'react'
import './Card.css'
import News_data from './News_data'
function Card() {
    console.log(News_data);
    return (
        <>
            {News_data.map((News_data) => (
                <>
                    <div className='container'>
                        <div className='card'>
                            <div className='img' >
                                <img src={News_data.newsImage} />
                            </div>
                            <h3> {News_data.newsTitle} </h3>
                            <h3> {News_data.newsContent} </h3>
                            <h4> {News_data.newsDetail} </h4>
                        </div>
                        <div >
                            <button className='readMore' > read more </button>
                        </div>
                    </div>
                </>
            ))}




        </>
    )
}

export default Card