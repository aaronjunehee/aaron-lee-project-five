import React, { Component } from 'react';
import down_chevron from '../images/down_chevron.svg'


class Header extends Component {
    render(){
        return (
            <header>
                <div class="intro">
                    <h2>A Safe Space</h2>
                    <h3>for indoor plant serial killers.</h3>
                </div>
                <div class='chevron'>
                    <img src={down_chevron}/>
                </div>
               
            </header>
        )
    }
}


export default Header;