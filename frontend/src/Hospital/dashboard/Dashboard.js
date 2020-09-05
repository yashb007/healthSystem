import React from 'react';
import Header from './layouts/header1';
import './dashboard.css';
import Card1 from './card1'
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';

function Hdashboard() {
    
    return(
        <>
            <Header />
            <div className="dash_land_img">
                <h2 className="white-text " id="dash_head">Dashboard...</h2>
            </div>
            <div className="row">
                <div className="col s12 m6 l3">
                    <Card1 />
                </div>
                <div className="col s12 m6 l3">
                    <Card2 />
                </div>
                <div className="col s12 m6 l3">
                    <Card3 />
                </div>
                <div className="col s12 m6 l3">
                    <Card4 />
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l6 ">
                    <Card5 />
                </div>
                <div className="col s12 m6 l6 ">
                    <Card6 />
                </div>
            </div>
        </>
    )
    
}

export default Hdashboard;