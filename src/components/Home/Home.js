import React, { Component } from 'react';

import CallToAction from './CallToAction';
import DataStuff from '../Races/DataStuff';
import MainNavi from '../MainNavi/MainNavi';

import layerzero from './header-0.svg';
import layerone from './header-1.svg';
import layertwo from './header-2-01.svg';
import layerthree from './header-3.svg';

class Home extends Component {
    render() {
        return (
            <div className="parallax">
                <MainNavi/>
                <div className="layer-0 parallax-layer">
                    <img src={layerzero} alt="parallax"/>
                </div>
                <div className="layer-1 parallax-layer">
                    <img src={layerone} alt="parallax"/>
                </div>
                <div className="layer-2 parallax-layer">
                    <img src={layertwo} alt="parallax"/>
                </div>
                <div className="layer-3 parallax-layer">
                    <img src={layerthree} alt="parallax"/>
                </div>
                <div className="parallax-cover">
                    <h1 className="main-head">A world of Adventure awaits you</h1>
                    <CallToAction/>
                </div>
            </div>
        );
    }
}

export default Home;