import React, { Component } from 'react';
import leaf from '../images/leaf.svg'


class Header extends Component {
    render(){
        return (
            <header>
                <h1>Houseplant Killer Confessions</h1>    
                <div class="skull">
                    <img src={leaf}/>
                </div>
            </header>
        )
    }
}


export default Header;