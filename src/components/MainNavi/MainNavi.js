import React from 'react';
import {Link} from 'react-router-dom';

import pets from './petStore.png';
import characters from './characters.png';
import faire from './tarot.png';
import darnassus from './darnassus.png';
import alliance from './alliance.png';
import horde from './horde.png';
import home from './home.png';

const MainNavi = () => {
    return (
        <div>
            <section className="main-nav">
                    <ul>
                        <li id="home"><Link to='/'>
                            <p>home</p>
                        </Link></li>
                        <li id="petShop"><Link to='/races'>
                            <p>races</p>
                        </Link></li>
                        <li id="fish"><Link to="/Stormwind">
                            <p>guilds</p>
                        </Link></li>
                        <li id="eat"><Link to="/Planes">
                            <p>planes</p>
                        </Link></li>
                        <li id="shop"><Link to='/races'>
                            <p>magics</p>
                        </Link></li>
                        <li id="faire"><Link to='/DarkmoonFaire'>
                            <p>events</p>
                        </Link></li>
                        <li id="characters"><Link to='/characters'>
                            <p>characters</p>
                        </Link></li>
                    </ul>
                </section>
        </div>
    );
};

export default MainNavi;