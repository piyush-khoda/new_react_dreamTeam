import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Point_table from './Pages/Point_table';
import Ranking from './Pages/Ranking';
import Card from './Pages/Card';
import Series from './Pages/Series';
import Table123 from './Pages/Table123';
import RankingDetail from './Pages/RankingDetail';


function App() {
  return (
    <>
    
    
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/pointtable" element={<Point_table />}/>
        <Route path="/series" element={<Series />}/>
        <Route path="/ranking" element={<Ranking />}/>
        <Route path="/card" element={<Card />}/>
        <Route path="*" element={<NoPage />}/>
        <Route path="/pointtable/pointtables" element={<Table123/>}/>
        <Route path="/ranking/rankingtable" element={<RankingDetail/>}/>
      </Routes>
    
    </>
  );
}

export default App;
