import React from 'react'
import Navbar from './Navbar'
import './Ranking.css'
import { Outlet, Link } from "react-router-dom"
var x;

function Ranking_table() {
  function TeamRanking(){
    x = 1;
    console.log(x);
  }
  function BattingRanking(){
    x = 2;
    console.log(x);
  }
  function BowlingRanking(){
    x = 3;
    console.log(x);
  }
  function AllRounderRanking(){
    x = 4;
    console.log(x);
  }
  return (
    <>
      <Navbar />
      <div className='rankingHead'>
        <h1 className='rkHead'> Ranking TABLE </h1>
      </div>
      <div className='rankingList'>
        
          
          <Link to="./rankingtable" onMouseEnter={()=>{TeamRanking()}} >ICC Team Ranking </Link><hr />
          <Link to="./rankingtable" onMouseEnter={()=>{BattingRanking()}}> ICC Batting Ranking </Link><hr />
          <Link to="./rankingtable" onMouseEnter={()=>{BowlingRanking()}} >ICC Bowling Ranking </Link><hr />
          <Link to="./rankingtable" onMouseEnter={()=>{AllRounderRanking()}}> Icc All-Rounder Ranking </Link><hr />
          
        

      </div>

    </>
  )
}

export default Ranking_table;
export {x};