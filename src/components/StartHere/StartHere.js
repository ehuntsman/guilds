import React, { Component } from 'react';

import MainNavi from '../MainNavi/MainNavi';

import darngreet from './DarnGreet.svg';

class StartHere extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="darnassus-container">
                <div className="para-one">
                    <h1>Welcome to the Syndicate!</h1>
                </div>
                <div className="para-two">
                    <p>Create Your Character!</p>
                </div>
                <div className="para-three">
                    <div className="darn-history">
                        <h3>Pick a name and a race</h3>
                        <p>Name is your own. Be cool. I don't know.</p>
                        <p>General easy races:</p>
                        <ul>
                            <li>Human</li>
                            <li>Elf</li>
                            <li>Orc</li>
                            <li>Dwarf</li>
                            <li>Dracolyte</li>
                        </ul>
                        <p>More races are available here!</p>
                    </div>
                </div>
                <div className="para-four">
                    <h3>Where are you from?</h3>
                </div>
                <div className="para-five">
                    <div className="interests">
                        <h1>The Ten Planes</h1>
                        <ul>
                            <li>Selnata</li>
                            <li>Farkath</li>
                            <li>Minereth</li>
                            <li>Daervyn</li>
                            <li>Vayle</li>
                            <li>Ofuria</li>
                            <li>Sorenthis</li>
                            <li>Tempestia</li>
                            <li>Vapor</li>
                            <li>Lana'tu</li>
                        </ul>
                    </div>
                </div>
                <div className="para-two">
                    <p>Edit your Character Sheet</p>
                </div>
                <div className="para-three">
                    <div className="darn-history">
                        <h3>Character Sheets are complicated</h3>
                        <p>So don't feel like you have to do it all right now. But here are some ideas if you know the path you want to take and just need to jump into combat!</p>
                        <p>Maybe a list of the links to the character class sheets?</p>
                    </div>
                </div>
                <MainNavi />
            </div>
        );
    }
}

export default StartHere;