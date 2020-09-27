import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar/>
        <Header/>  
      </div>
      <BottomBar/> 
      
      {/*Conten*/}
     
    </div>
  );
}

export default App;
