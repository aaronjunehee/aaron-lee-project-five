import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import cactus from '../images/cactus.png';




class Header extends Component {

    moveToSection = () => {
        scroller.scrollTo('form', {
            duration: 1000,
            delay: 100,
            smooth: "easeInOutQuint",
        });
    }

    render(){
        return (
            <header>
                <div className="wrapper scale-in-center">
                    <div className="headerFlexContainer">
                        <div className="titleContainer">
                            <h2>A safe space for<span className="lineBreak">indoor plant</span></h2>
                            <h3 className="flicker-in-1">serial killers...</h3>
                            <button
                                className='mainButton jello-horizontal'
                                onClick={this.moveToSection}>Make a Confession
                            </button>
                        </div>
                        <div className="cactusImageContainer">
                            <img src={cactus} alt="A part of a plant hanging down from the top right corner of the window"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header;