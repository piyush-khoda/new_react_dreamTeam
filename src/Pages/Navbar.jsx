import React from 'react'
import './Navbar.css';
import { Outlet , Link } from "react-router-dom"

function Navbar() {
    const openNav = () => {
        document.getElementById('mySidenav').style.width = "240px";
    }
    const closeNav = () => {
        document.getElementById('mySidenav').style.width = "0";
    }
    return (
        <>
            <div >
                <header>
                    <div className="tophead">
                        <div>
                        <span className="manulines" onClick={openNav}>&#9776;</span>
                        </div>
                        <div className="brandlogo">
                            Dream Team
                        </div>
                        
                    </div>
                </header>
                <div className="sidenav" id="mySidenav">
                    <Link to = "#" className="closebtn" onClick={closeNav}> &times; </Link>
                    <Link to = "/">Home</Link>
                    <Link to = "#">Live Score</Link>
                    <Link to = "#">Shadule</Link>
                    <Link to = "/card">News</Link>
                    <Link to = "#">Players</Link>
                    <Link to = "/series">Series</Link>
                    <Link to = "#">Videos</Link>
                    <Link to = "/pointtable">Points Table</Link>
                    <Link to = "/ranking">Rankings</Link>
                    <Link to = "#">Sign up/Sign in</Link>
                    

                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar