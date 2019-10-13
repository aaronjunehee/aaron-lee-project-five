import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Nav extends Component {

    moveToMain = () => {
        scroller.scrollTo('form', {
            duration: 1000,
            delay: 100,
            smooth: "easeInOutQuint",
        });
    }

    moveToComments = () => {
        scroller.scrollTo('comments', {
            duration: 1000,
            delay: 100,
            smooth: "easeInOutQuint",
        });
    }

    render() {
        return (
            <nav>
                <h1>Houseplant-Killer Confessions</h1>
                <ol>
                    <li onClick={this.moveToMain}
                    >Share your botanical guilt</li>
                    <li onClick={this.moveToComments}>Read comments</li>
                </ol>
            </nav>
        )
    }
}


export default Nav;