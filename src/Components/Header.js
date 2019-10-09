import React, { Component } from 'react';
import down_chevron from '../images/down_chevron.svg'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import plant1 from '../images/plant1.png';
import plant2 from '../images/cactus.png';




class Header extends Component {

    moveToSection = () => {
        scroller.scrollTo('main');
    }

    render(){
        return (
            <header>
                <div className="wrapper">
                    <div className="headerFlexContainer">
                       
                            <div className="wordContent">
                                <h2>A safe space for<span className="lineBreak">indoor plant</span></h2>
                                <h3>serial <span className="highlight"> killers...</span></h3>
                                <button
                                    className='mainButton'
                                    onClick={this.moveToSection}>Make a Confession
                                </button>
                            </div>
                        
                        {/* <div className='chevron'>
                                <button
                                className='mainButton'
                                onClick={this.moveToSection}>
                                </button>
                        </div> */}
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