import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class CallToAction extends Component {
    render() {
        $(document).ready(function(){
            $(".darnassus h1").css("color", "purple")
            $(".stormwind h1").css("color", "blue")
            $(".planes h1").css("color", "red")
        })
        return (
            <div className="home-main-links-container">
                <div className="home-links">
                    <Link to="/starthere">
                        <div className="link-box">
                            <div className="start-image"></div>
                            <h3>Start Here</h3>
                            <p>Create your own character with our complete walk through guide.</p>
                        </div>
                    </Link>
                    <Link to="/updates">
                        <div className="link-box">
                            <div className="uvu-image"></div>
                            <h3>Updates</h3>
                            <p>News and all the changes made to the corners of the Syndicate.</p>
                        </div>
                    </Link>
                    <Link to="/guilds">
                        <div className="link-box">
                            <div className="guilds-image"></div>
                            <h3>Guilds</h3>
                            <p>All the guilds and thier magics.</p>
                        </div>
                    </Link>
                </div>
                <div className="home-start-section">
                    <p>If you want to create a character and join us in our worlds, follow this interactive, step-by-step guide and jump into RPing in as little as five minutes!</p>
                </div>
                <div className="home-magics-section">
                    <p>Learn about all out magics.</p>
                    <ul>
                        <li>Light</li>
                        <li>Dark</li>
                        <li>Earth</li>
                        <li>Fire</li>
                        <li>Water</li>
                        <li>Wind</li>
                    </ul>
                </div>
                <div className="home-rp-section">
                    <p>All types of RP, so you're bound ot find something that works for you.</p>
                </div>
            </div>
        );
    }
}

export default CallToAction;