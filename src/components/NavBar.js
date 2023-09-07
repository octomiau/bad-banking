import React from 'react';


function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" title="Go to Bad Bank´s home">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/" title="Create your account">Create Account</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/login/" title="Login into your account">Login</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/deposit/" title="View your deposits">Deposit</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/withdraw/" title="View your withdraws">Withdraw</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/balance/" title="View your balance">Balance</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/alldata/" title="Peek at other´s data">All Data</a>
                </li>          
            </ul>
            </div>
        </div>
      </nav>
      </>
    );
  }

  export default NavBar;
  