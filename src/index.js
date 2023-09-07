
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import { UserContext } from './components/context';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'name',email:'email',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
