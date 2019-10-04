import React, { Component } from 'react';
import down_chevron from '../images/down_chevron.svg'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import plant1 from '../images/plant1.png';
import plant2 from '../images/plant2.png';




class Header extends Component {

    moveToSection = () => {
        scroller.scrollTo('main');
    }

    render(){
        return (
            <header>
                <div className="wrapper">
                    <div className="headerFlexContainer">
                        <div className="intro">
                            <h2>A safe space</h2>
                            <h3>for indoor plant</h3>
                            <h3>serial <span className="highlight"> killers<span className="redDot">.</span></span></h3>
                        </div>
                        <div className='chevron'>
                                <button
                                className='mainButton'
                                onClick={this.moveToSection}>
                                <img src={down_chevron} />
                                </button>
                        </div>
                        {/* <div className="plant1">
                            <img src={plant1} alt="A branch of plant with long leaves hanging from the left side of the site"/>
                        </div> */}
                        <div className="plant2">
                            <img src={plant2} alt="A part of a plant hanging down from the top right corner of the window"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header;