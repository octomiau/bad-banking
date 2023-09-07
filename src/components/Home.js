import React from 'react';
import { UserContext, Card } from './context';

function Home(){
    const bgStyle = {
        backgroundImage: 'url(/BGbank-home.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    };
    return (
        <>
            <div style={bgStyle}></div>
                <Card
                    txtcolor="black"
                    header="Bad Bank"
                    title="Welcome to the bank!"
                    text="Welcome to the unsafest bank arround the web. Be sure any data you enter will be public."
                    body={(<img src="homeCard.png" className="img-fluid" alt="Responsive image"/>)}
                />    
        </>
    );  
  }
  
  export default Home;