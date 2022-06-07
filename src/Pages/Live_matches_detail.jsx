import React from 'react'
import Live_matches_data from './Live_matches_data'
import Live_matches from './Live_matches'
import './Live_matches.css'

function Live_matches_detail() {
  
  return (
    <>
    <div className='liveMatchBody'>
    
    <Live_matches
        matchTitle = {Live_matches_data[0].matchTitle}
        firstTeamScore={Live_matches_data[0].firstTeamScore}
        secondTeamScore={Live_matches_data[0].secondTeamScore}
        currentResult = {Live_matches_data[0].currentResult}
      />
      <Live_matches
        
        matchTitle = {Live_matches_data[1].matchTitle}
        firstTeamScore={Live_matches_data[1].firstTeamScore}
        secondTeamScore={Live_matches_data[1].secondTeamScore}
        currentResult = {Live_matches_data[1].currentResult}
      />
      <Live_matches
        
        matchTitle = {Live_matches_data[2].matchTitle}
        firstTeamScore={Live_matches_data[2].firstTeamScore}
        secondTeamScore={Live_matches_data[2].secondTeamScore}
        currentResult = {Live_matches_data[2].currentResult}
      />
      <Live_matches
        
        matchTitle = {Live_matches_data[3].matchTitle}
        firstTeamScore={Live_matches_data[3].firstTeamScore}
        secondTeamScore={Live_matches_data[3].secondTeamScore}
        currentResult = {Live_matches_data[3].currentResult}
      /><Live_matches
        
        matchTitle = {Live_matches_data[4].matchTitle}
        firstTeamScore={Live_matches_data[4].firstTeamScore}
        secondTeamScore={Live_matches_data[4].secondTeamScore}
        currentResult = {Live_matches_data[4].currentResult}
      />
      </div>
      <div>
        <h2 className='more_matches'> More...</h2>
      </div>
      
      
    </>
  )
}

export default Live_matches_detail