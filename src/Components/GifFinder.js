import React, { Component } from 'react';
import axios from 'axios';

    
class GifFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            search: '',
            // selectedGif: false,
            activeItemUrl: null
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
        this.props.gifParentCallback(gifUrl);
        // this.toggleGif(gifUrl);
        this.setState({
            activeItemUrl: gifUrl
        })
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

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(this.state.search);
            this.getGifs(this.state.search);
        }
    }

    render() {
        const { activeItemUrl } = this.state;
        // const selectionVis = activeItemUrl === gifItem.images.fixed_width.url ? 'show' : 'hide';
        return (
            <div className="popUp">

                <div className="gifContainer">
                    <form className="gifNav">
                        <i 
                            className="fas fa-times close" 
                            onClick={this.props.toggle}
                            >
                        </i>
                        <input
                            onChange={this.handleChange}
                            name="searchGifs"
                            value={this.state.search} 
                            type="text"
                            onKeyDown={this._handleKeyDown} 
                        />
                        <button onClick={this.handleSubmit}>Find Gif's!</button>
                    </form>
                    <div className="gifResults">
                        {this.state.search ? (this.state.gifs.map(gifItem => {
                            return (
                                <div 
                                    className={activeItemUrl === gifItem.images.fixed_width.url ? 'show' : 'hide'}
                                key={gifItem.id}
                                onClick={() => this.handleClick(gifItem.images.fixed_width.url)}>
                                    <img src={gifItem.images.fixed_height.url} />
                                </div>
                            )
                        })) : (<p></p>)}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GifFinder;