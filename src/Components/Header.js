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
                <div className="intro">
                    <h2>A Safe Space</h2>
                    <h3>for <span className="highlight">indoor plant serial killers.</span></h3>
                </div>
                <div className='chevron'>
                        <button
                        className='mainButton'
                        onClick={this.moveToSection}>
                        <img src={down_chevron} />
                        </button>
                </div>
                <div className="plant1">
                    <img src={plant1} alt=""/>
                </div>
                <div className="plant2">
                    <img src={plant2} alt="" />
                </div>
            </header>
        )
    }
}


export default Header;