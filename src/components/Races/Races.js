import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setAnimal} from '../../ducks/races.js';

import MainNavi from '../MainNavi/MainNavi';

import love from './love.svg';

class Races extends Component {
    constructor(props){
        super(props);

        this.state = {
            NPRaces: [
                {
                    name: "Human"
                },
                {
                    name: "Elf"
                }
            ],
            PRaces: [

            ]
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="races-container">
                <div className="row-your-boat">
                    <div className="race-header">
                        <h1>Be who you always wish you could be</h1>
                        <div className="race-header-description">
                        </div>
                    </div>
                    <div className="humanoid-header">
                        <h2>Non-Planar Races (can be from any plane)</h2>
                    </div>
                    <div className="element-container">
                        {this.state.NPRaces.map((element, index)=>{
                            return(
                                <div className="pet-box" key={index}>
                                    <p>{element.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row-your-boat">
                    <div className="elemental-header">
                        <h2>Planar Races (only from a particular place)</h2>
                    </div>
                    <div className="element-container">
                        {this.state.PRaces.map((element, index)=>{
                            return(
                                <div className="pet-box" key={index}>
                                    <p>{element.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="spacer"></div>
                <MainNavi/>
            </div>
        );
    }
}

export default (Races);