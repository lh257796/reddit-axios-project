import React, { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sites from './Sites'
import Search from './Search'
import Apis from './Apis';
import './App.css'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {

  },[])

  return (
    <div className="App">
      <nav className='Nav'>
        <Link to='/'>||  -- HOME --  ||</Link>
        <Link to='/sites'>||--SITES--||</Link>
        <Link to='/sites/search'>||--SEARCH--||</Link>
        <Link to='/apis'>||--APIS--||</Link>
      </nav>
      <br/>

      <Routes>
        <Route path='/' element={<div>Welcome to <small><strong>HAN'S</strong></small> reddit API fetcher. <br/><br/> SITES will let you query a subreddit by name. <br/> SEARCH will let you query Reddit's search function.</div>} />
        <Route path='/sites' element={<Sites/>} />
        <Route path='/sites/search' element={<Search/>} />
        <Route path='/sites/search/:filter' element={<Search/>} />
        <Route path='/apis' element={<Apis/>} />
      </Routes>
    </div>
  );
}

export default App;
