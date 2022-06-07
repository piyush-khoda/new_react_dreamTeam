import React from 'react'
import Navbar from './Navbar'
import './Point_table.css'
import { Outlet, Link } from "react-router-dom"
var x;

function Point_table() {
  function Women_World_Cup(){
    x = 1;
    console.log(x);
  }
  function Men_World_Cup(){
    x = 2;
    console.log(x);
  }
  function IPL_2022(){
    x = 3;
    console.log(x);
  }
  function BBL_2022(){
    x = 4;
    console.log(x);
  }
  function BBL_Women_2022(){
    x = 5;
    console.log(x);
  }
  function CPL_2022(){
    x = 6;
    console.log(x);
  }
  function PSL_2022(){
    x = 7;
    console.log(x);
  }
  function BPL_2022(){
    x = 8;
    console.log(x);
  }
  return (
    <>
      <Navbar />
      <div className='ptTableHead'>
        <h1 className='ptHead'> POINT TABLE </h1>
      </div>
      <div className='pointTable'>
        <div className='ptContent'>
          
          <Link to="./pointtables" onMouseEnter={()=>{Women_World_Cup()}} >ICC Women World Cup 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{Men_World_Cup()}}> ICC Men Test World Cup 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{IPL_2022()}} >IPL 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{BBL_2022()}}> BBL 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{BBL_Women_2022()}} >BBL Women 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{CPL_2022()}}> CPL 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{PSL_2022()}} >PSL 2022 </Link><hr />
          <Link to="./pointtables" onMouseEnter={()=>{BPL_2022()}}> BPL 2022 </Link><hr />
        </div>

      </div>

    </>
  )
}

export default Point_table;
export {x};