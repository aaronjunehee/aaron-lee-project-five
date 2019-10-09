import React, { Component } from 'react';
import virus from '../images/virus.svg';


class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>Houseplant-Killer <span className="">Confessions</span></h1>
                <ol>
                    <li>Share your botanical guilt</li>
                    <li>Read comments</li>
                </ol>
            </nav>
        )
    }
}


export default Nav;