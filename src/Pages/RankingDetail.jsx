import React from 'react'
import Team_Odi_Ranking_data from '../RankingTable/TeamOdiRanking'
import Team_Test_Ranking_data from '../RankingTable/TeamTestRanking'
import Team_Twenty_Ranking_data from '../RankingTable/TeamTwentyRanking'
import Odi_Batting_data from '../RankingTable/OdiBatting'
import Test_Batting_data from '../RankingTable/TestBatting'
import Twenty_Batting_data from '../RankingTable/TwentyBatting'
import Odi_Bowling_data from '../RankingTable/OdiBowling'
import Test_Bowling_data from '../RankingTable/TestBowling'
import Twenty_Bowling_data from '../RankingTable/TwentyBowling'
import Odi_AllRounder_data from '../RankingTable/OdiAllRounder'
import Test_AllRounder_data from '../RankingTable/TestAllRounder'
import Twenty_AllRounder_data from '../RankingTable/TwentyAllRounder'


import ranking_table, { x } from './Ranking'
import './Table123.css'

const Funodi = () => {
    if (x === 1) {
        return (
            <>

                {Team_Odi_Ranking_data.map((Team_Odi_Ranking_data) => (
                    <tr>
                        <td> {Team_Odi_Ranking_data.Team_Odi_Ranking_data_rank} </td>
                        <td> {Team_Odi_Ranking_data.Team_Odi_Ranking_data_team} </td>
                        <td> {Team_Odi_Ranking_data.Team_Odi_Ranking_data_points} </td>
                        <td> {Team_Odi_Ranking_data.Team_Odi_Ranking_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />





            </>
        );

    }
    if (x === 2) {
        return (
            <>
                {Odi_Batting_data.map((Odi_Batting_data) => (
                    <tr>
                        <td> {Odi_Batting_data.Odi_Batting_data_rank} </td>
                        <td> {Odi_Batting_data.Odi_Batting_data_name} </td>
                        <td> {Odi_Batting_data.Odi_Batting_data_team} </td>
                        <td> {Odi_Batting_data.Odi_Batting_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }
    if (x === 3) {
        return (
            <>
                {Odi_Bowling_data.map((Odi_Bowling_data) => (
                    <tr>
                        <td> {Odi_Bowling_data.Odi_Bowling_data_rank} </td>
                        <td> {Odi_Bowling_data.Odi_Bowling_data_name} </td>
                        <td> {Odi_Bowling_data.Odi_Bowling_data_team} </td>
                        <td> {Odi_Bowling_data.Odi_Bowling_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }
    if (x === 4) {
        return (
            <>
                {Odi_AllRounder_data.map((Odi_AllRounder_data) => (
                    <tr>
                        <td> {Odi_AllRounder_data.Odi_AllRounder_data_rank} </td>
                        <td> {Odi_AllRounder_data.Odi_AllRounder_data_name} </td>
                        <td> {Odi_AllRounder_data.Odi_AllRounder_data_team} </td>
                        <td> {Odi_AllRounder_data.Odi_AllRounder_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }

}
const Funtest = () => {
    if (x === 1) {
        return (
            <>



                {Team_Test_Ranking_data.map((Team_Test_Ranking_data) => (
                    <tr>
                        <td> {Team_Test_Ranking_data.Team_Test_Ranking_data_rank} </td>
                        <td> {Team_Test_Ranking_data.Team_Test_Ranking_data_team} </td>
                        <td> {Team_Test_Ranking_data.Team_Test_Ranking_data_points} </td>
                        <td> {Team_Test_Ranking_data.Team_Test_Ranking_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />



            </>
        );

    }
    if (x === 2) {
        return (
            <>
                {Test_Batting_data.map((Test_Batting_data) => (
                    <tr>
                        <td> {Test_Batting_data.Test_Batting_data_rank} </td>
                        <td> {Test_Batting_data.Test_Batting_data_name} </td>
                        <td> {Test_Batting_data.Test_Batting_data_team} </td>
                        <td> {Test_Batting_data.Test_Batting_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }
    if (x === 3) {
        return (
            <>
                    {Test_Bowling_data.map((Test_Bowling_data) => (
                    <tr>
                        <td> {Test_Bowling_data.Test_Bowling_data_rank} </td>
                        <td> {Test_Bowling_data.Test_Bowling_data_name} </td>
                        <td> {Test_Bowling_data.Test_Bowling_data_team} </td>
                        <td> {Test_Bowling_data.Test_Bowling_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }
    if (x === 4) {
        return (
            <>
                {Test_AllRounder_data.map((Test_AllRounder_data) => (
                    <tr>
                        <td> {Test_AllRounder_data.Test_AllRounder_data_rank} </td>
                        <td> {Test_AllRounder_data.Test_AllRounder_data_name} </td>
                        <td> {Test_AllRounder_data.Test_AllRounder_data_team} </td>
                        <td> {Test_AllRounder_data.Test_AllRounder_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }

}
const Funtwenty = () => {
    if (x === 1) {
        return (
            <>


                {Team_Twenty_Ranking_data.map((Team_Twenty_Ranking_data) => (
                    <tr>
                        <td> {Team_Twenty_Ranking_data.Team_Twenty_Ranking_data_rank} </td>
                        <td> {Team_Twenty_Ranking_data.Team_Twenty_Ranking_data_team} </td>
                        <td> {Team_Twenty_Ranking_data.Team_Twenty_Ranking_data_points} </td>
                        <td> {Team_Twenty_Ranking_data.Team_Twenty_Ranking_data_rating} </td>
                    </tr>
                ))}


            </>
        );

    }
    if (x === 2) {
        return (
            <>
                {Twenty_Batting_data.map((Twenty_Batting_data) => (
                    <tr>
                        <td> {Twenty_Batting_data.Twenty_Batting_data_rank} </td>
                        <td> {Twenty_Batting_data.Twenty_Batting_data_name} </td>
                        <td> {Twenty_Batting_data.Twenty_Batting_data_team} </td>
                        <td> {Twenty_Batting_data.Twenty_Batting_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }
    if (x === 3) {
        return (
            <>
                {Twenty_Bowling_data.map((Twenty_Bowling_data) => (
                    <tr>
                        <td> {Twenty_Bowling_data.Twenty_Bowling_data_rank} </td>
                        <td> {Twenty_Bowling_data.Twenty_Bowling_data_name} </td>
                        <td> {Twenty_Bowling_data.Twenty_Bowling_data_team} </td>
                        <td> {Twenty_Bowling_data.Twenty_Bowling_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }
    if (x === 4) {
        return (
            <>
                {Twenty_AllRounder_data.map((Twenty_AllRounder_data) => (
                    <tr>
                        <td> {Twenty_AllRounder_data.Twenty_AllRounder_data_rank} </td>
                        <td> {Twenty_AllRounder_data.Twenty_AllRounder_data_name} </td>
                        <td> {Twenty_AllRounder_data.Twenty_AllRounder_data_team} </td>
                        <td> {Twenty_AllRounder_data.Twenty_AllRounder_data_rating} </td>
                    </tr>
                ))}
                <br />
                <br />


            </>
        );

    }

}
function RankingDetail() {
    return (
        <>
            <div className='header'>
                <h2> ODI </h2>
                <table className='tableContain'>
                    
                    <thead className='tableHeader'>
                        <tr>

                            <th> RANK </th>
                            <th> TEAM </th>
                            <th> POINT </th>
                            <th> RATING </th>

                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        <Funodi />
                    </tbody>
                    </table>
                    <h2> TEST </h2>
                    <table className='tableContain'>
                    <thead className='tableHeader'>
                        <tr>

                            <th> RANK </th>
                            <th> TEAM </th>
                            <th> POINT </th>
                            <th> RATING </th>

                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        <Funtest />
                    </tbody>
                    </table>
                    <h2> TWENTY </h2>
                    <table className='tableContain'>
                    <thead className='tableHeader'>
                        <tr>

                            <th> RANK </th>
                            <th> TEAM </th>
                            <th> POINT </th>
                            <th> RATING </th>

                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        <Funtwenty />
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default RankingDetail