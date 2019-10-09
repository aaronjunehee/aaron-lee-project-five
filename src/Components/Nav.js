import React, { Component } from 'react';
import virus from '../images/virus.svg';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Nav extends Component {

    moveToMain = () => {
        scroller.scrollTo('main');
    }

    moveToComments = () => {
        scroller.scrollTo('test');
    }

    render() {
        return (
            <nav>
                <h1>Houseplant-Killer <span className="">Confessions</span></h1>
                <ol>
                    <li onClick={this.moveToMain}>Share your botanical guilt</li>
                    <li onClick={this.moveToComments}>Read comments</li>
                </ol>
            </nav>
        )
    }
}


export default Nav;