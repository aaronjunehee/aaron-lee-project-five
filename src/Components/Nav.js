import React, { Component } from 'react';
import virus from '../images/virus.svg';


class Nav extends Component {
    render() {
        return (
            <nav>
                {/* <div className="skull">
                    <img src={virus} />
                </div> */}
                <h1>Houseplant-Killer <span className="">Confessions</span></h1>
            </nav>
        )
    }
}


export default Nav;