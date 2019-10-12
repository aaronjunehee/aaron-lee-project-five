import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Nav extends Component {

    moveToMain = () => {
        scroller.scrollTo('form');
    }

    moveToComments = () => {
        scroller.scrollTo('comments');
    }

    render() {
        return (
            <nav>
                <h1>Houseplant-Killer Confessions</h1>
                <ol>
                    <li onClick={this.moveToMain}>Share your botanical guilt</li>
                    <li onClick={this.moveToComments}>Read comments</li>
                </ol>
            </nav>
        )
    }
}


export default Nav;