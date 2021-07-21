import React from 'react'
import Panel from './components/Panel';
import Navbar from './components/Navbar';
import './App.css';
import 'materialize-css';


function App() {

  return (
    <div  className="container">
        <Navbar></Navbar>
        <div className="row">
           <Panel  className="col s6" titel="Hallo React, what's up" counter="100"></Panel>
           <Panel  className="col s6" titel="ich werde Profis"></Panel>
        </div>
    </div>
  );
}
export default App;
