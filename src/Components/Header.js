import React, { Component } from 'react';
import down_chevron from '../images/down_chevron.svg'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Header extends Component {

    moveToSection = () => {
        scroller.scrollTo('main');
    }



    render(){
        return (
            <header>
                <div class="intro">
                    <h2>A Safe Space</h2>
                    <h3>for <span class="highlight">indoor plant serial killers.</span></h3>
                </div>
                <div 
                    className='chevron'
                    onClick={this.moveToSection}>
                    <img src={down_chevron} />
                </div>
               
            </header>
        )
    }
}


export default Header;