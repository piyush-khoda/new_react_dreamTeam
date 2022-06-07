import React from 'react'
import IccWomenWorldCup_pointtable_data from '../Table/IccWomenWorldCup'
import IccMenWorldCup_pointtable_data from '../Table/IccMenWorldCup'
import Ipl_pointtable_data from '../Table/Ipl_pointtable_data'
import Bbl_pointtable_data from '../Table/Bbl_pointtable_data'
import BblWomen_pointtable_data from '../Table/BblWomen_pointtable_data'
import Cpl_pointtable_data from '../Table/Cpl_pointtable_data'
import Psl_pointtable_data from '../Table/Psl_pointable_data'
import Bpl_pointtable_data from '../Table/Bpl_pointtable_data'

import Point_table,{x} from './Point_table'
import './Table123.css'

const Fun12 = () => {
    if (x === 1) {
        return (
            <>

                {IccWomenWorldCup_pointtable_data.map((IccWomenWorldCup_pointtable_data) => (
                    <tr>
                        {/* <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_logo} </td> */}
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_team} </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_played} </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_win} </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_loss} </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_tie} </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_noresult}  </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_NR} </td>
                        <td> {IccWomenWorldCup_pointtable_data.IccWomenWorldCup_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 2) {
        return (
            <>

                {IccMenWorldCup_pointtable_data.map((IccMenWorldCup_pointtable_data) => (
                    <tr>
                        {/* <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_logo} </td> */}
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_team} </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_played} </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_win} </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_loss} </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_tie} </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_noresult}  </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_NR} </td>
                        <td> {IccMenWorldCup_pointtable_data.IccMenWorldCup_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 3) {
        return (
            <>

                {Ipl_pointtable_data.map((Ipl_pointtable_data) => (
                    <tr>
                        {/* <td> {Ipl_pointtable_data.Ipl_logo} </td> */}
                        <td> {Ipl_pointtable_data.Ipl_team} </td>
                        <td> {Ipl_pointtable_data.Ipl_played} </td>
                        <td> {Ipl_pointtable_data.Ipl_win} </td>
                        <td> {Ipl_pointtable_data.Ipl_loss} </td>
                        <td> {Ipl_pointtable_data.Ipl_tie} </td>
                        <td> {Ipl_pointtable_data.Ipl_noresult}  </td>
                        <td> {Ipl_pointtable_data.Ipl_NR} </td>
                        <td> {Ipl_pointtable_data.Ipl_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 4) {
        return (
            <>

                {Bbl_pointtable_data.map((Bbl_pointtable_data) => (
                    <tr>
                        {/* <td> {Bbl_pointtable_data.Bbl_logo} </td> */}
                        <td> {Bbl_pointtable_data.Bbl_team} </td>
                        <td> {Bbl_pointtable_data.Bbl_played} </td>
                        <td> {Bbl_pointtable_data.Bbl_win} </td>
                        <td> {Bbl_pointtable_data.Bbl_loss} </td>
                        <td> {Bbl_pointtable_data.Bbl_tie} </td>
                        <td> {Bbl_pointtable_data.Bbl_noresult}  </td>
                        <td> {Bbl_pointtable_data.Bbl_NR} </td>
                        <td> {Bbl_pointtable_data.Bbl_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 5) {
        return (
            <>

                {BblWomen_pointtable_data.map((BblWomen_pointtable_data) => (
                    <tr>
                        {/* <td> {BblWomen_pointtable_data.BblWomen_logo} </td> */}
                        <td> {BblWomen_pointtable_data.BblWomen_team} </td>
                        <td> {BblWomen_pointtable_data.BblWomen_played} </td>
                        <td> {BblWomen_pointtable_data.BblWomen_win} </td>
                        <td> {BblWomen_pointtable_data.BblWomen_loss} </td>
                        <td> {BblWomen_pointtable_data.BblWomen_tie} </td>
                        <td> {BblWomen_pointtable_data.BblWomen_noresult}  </td>
                        <td> {BblWomen_pointtable_data.BblWomen_NR} </td>
                        <td> {BblWomen_pointtable_data.BblWomen_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 6) {
        return (
            <>

                {Cpl_pointtable_data.map((Cpl_pointtable_data) => (
                    <tr>
                        {/* <td> {Cpl_pointtable_data.Cpl_logo} </td> */}
                        <td> {Cpl_pointtable_data.Cpl_team} </td>
                        <td> {Cpl_pointtable_data.Cpl_played} </td>
                        <td> {Cpl_pointtable_data.Cpl_win} </td>
                        <td> {Cpl_pointtable_data.Cpl_loss} </td>
                        <td> {Cpl_pointtable_data.Cpl_tie} </td>
                        <td> {Cpl_pointtable_data.Cpl_noresult}  </td>
                        <td> {Cpl_pointtable_data.Cpl_NR} </td>
                        <td> {Cpl_pointtable_data.Cpl_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 7) {
        return (
            <>

                {Psl_pointtable_data.map((Psl_pointtable_data) => (
                    <tr>
                        {/* <td> {Psl_pointtable_data.Psl_logo} </td> */}
                        <td> {Psl_pointtable_data.Psl_team} </td>
                        <td> {Psl_pointtable_data.Psl_played} </td>
                        <td> {Psl_pointtable_data.Psl_win} </td>
                        <td> {Psl_pointtable_data.Psl_loss} </td>
                        <td> {Psl_pointtable_data.Psl_tie} </td>
                        <td> {Psl_pointtable_data.Psl_noresult}  </td>
                        <td> {Psl_pointtable_data.Psl_NR} </td>
                        <td> {Psl_pointtable_data.Psl_points} </td>

                    </tr>
                ))}

            </>
        );

    }
    if (x === 8) {
        return (
            <>

                {Bpl_pointtable_data.map((Bpl_pointtable_data) => (
                    
                    <tr>
                        {/* <td> {Bpl_pointtable_data.Bpl_logo} </td> */}
                        <td> {Bpl_pointtable_data.Bpl_team} </td>
                        <td> {Bpl_pointtable_data.Bpl_played} </td>
                        <td> {Bpl_pointtable_data.Bpl_win} </td>
                        <td> {Bpl_pointtable_data.Bpl_loss} </td>
                        <td> {Bpl_pointtable_data.Bpl_tie} </td>
                        <td> {Bpl_pointtable_data.Bpl_noresult}  </td>
                        <td> {Bpl_pointtable_data.Bpl_NR} </td>
                        <td> {Bpl_pointtable_data.Bpl_points} </td>

                    </tr>
                ))}

            </>
        );

    }
}
function Table123() {
    return (
        console.log(Ipl_pointtable_data.Ipl_team),
        <>
            <div className='header'>
                
                    <table className='tableContain'>
                        <thead className='tableHeader'>
                            <tr>

                                <th> TEAM </th>
                                <th> PLAYED </th>
                                <th> WINS </th>
                                <th> LOSS </th>
                                <th> TIE </th>
                                <th> NO RESULT </th>
                                <th> NR </th>
                                <th> POINTS </th>

                            </tr>
                        </thead>
                        <tbody className='tableBody'>
                            <Fun12 />
                        </tbody>
                    </table>
                
            </div>
        </>
    )
}

export default Table123