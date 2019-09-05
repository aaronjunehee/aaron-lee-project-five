import React, { Component } from 'react'; 

class Form extends Component {
    render() {
        return (
            <form>
                <label>Confession</label>
                <input type="text"/>
                <button>Submit</button>
            </form>
        )
    }
}


export default Form;