import React, { Component } from 'react';
import Header from './layouts/header1';
import './dashboard.css';
import Card1 from './card1'
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';
import Axios from 'axios';

class Hdashboard extends Component{
    state={
        info:null
    }

    componentDidMount(){
        const data=localStorage.getItem('user');
        const td=JSON.parse(data);
    Axios.get('http://localhost:8080/hsp/dash/'+td._id).then((data)=>{
        console.log(data);
        this.setState({
            info : data.data.hos
        })
        console.log(this.state);
    })
    
    }

    render(){
        return(
            <>
                <Header />
                <div className="dash_land_img">
                    <h2 className="white-text " id="dash_head">Dashboard...</h2>
                </div>
                <div className="row">
                    <div className="col s12 m6 l3">
                        <Card1 beds={this.state.info ? this.state.info.totalBedsCount : null} bedsC={this.state.info ? this.state.info.OccupiedBedsCount : null} />
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
                    <div className="col s12 m12 l6 ">
                        <Card5 />
                    </div>
                    <div className="col s12 m12 l6 ">
                        <Card6 />
                    </div>
                </div>
            </>
        )
    }
}

export default Hdashboard;