import React, { Component } from 'react';
import axios from 'axios';

    
class GifFinder extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            search: '',
        };
    }

    getGifs = (search) => {
        axios({
            method:'GET',
            url: 'https://api.giphy.com/v1/gifs/search',
            dataResponse: 'json',
                params: {
                    api_key: 'eCFQf1KPHJ1iP8TV7VEGUhOfyupAxC83',
                    q: search
                }
        }).then(results => {
            results = results.data.data
            this.setState({
                gifs: results
            })
            console.log(this.state.gifs);
        })
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state.search);
    }

    handleClick = (gifUrl) => {
        console.log(gifUrl);
        this.props.gifParentCallback(gifUrl);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getGifs(this.state.search);
    }

    emptySearch = () => {
        this.setState({
            search: '',
        })
    }

    render() {
        return (
            <div className="popUp">
                <div className="gifContainer">
                    <i class="fas fa-times close"></i>
                    <input
                        onChange={this.handleChange}
                        name="searchGifs"
                        value={this.state.search} 
                        type="text" 
                    />
                    <button onClick={this.handleSubmit}>Find Gif's!</button>
                    {this.state.search ? (this.state.gifs.map(gifItem => {
                        return (
                            <div key={gifItem.id} onClick={() => this.handleClick(gifItem.images.original.url)}>
                                <img src={gifItem.images.fixed_width.url} />
                            </div>
                        )
                    })) : (<p>Nothing</p>)}
                </div>
                
            </div>
        );
    }
}

export default GifFinder;