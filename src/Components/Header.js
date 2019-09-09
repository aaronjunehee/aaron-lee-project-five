import React, { Component } from 'react';
import down_chevron from '../images/down_chevron.svg'


class Header extends Component {
    render(){
        return (
            <header>
                <div class="intro">
                    <h2>A Safe Space</h2>
                    <h3>for <span class="highlight">indoor plant serial killers.</span></h3>
                </div>
                <div class='chevron'>
                    <a href="#main"><img src={down_chevron} /></a>
                </div>
               
            </header>
        )
    }
}


export default Header;