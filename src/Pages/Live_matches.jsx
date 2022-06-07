import React from 'react'
import './Live_matches.css';
function Live_matches(props) {
    return (
        <>

            

                <div className='Live_container'>
                    <div className='blocks'>

                        <h3 className='match'> {props.matchTitle} </h3>
                        <div className='score'>
                            <p>{props.firstTeamScore}</p>
                            <p>{props.secondTeamScore}</p>
                        </div>
                        <div className='result'>
                            <p>{props.currentResult}</p>
                        </div>


                    </div>
                </div>

            
        </>
    )
}

export default Live_matches