import React, { Component } from 'react';
import axios from 'axios';

    
class GifFinder extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            gifs: [],
            selectedGifUrl: null,
            userHasNotSearched: true,
        };
        
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getGifs(this.state.search);
    }

    // This function will allow us to asynchronously retrieve specifically searched Gifs by completing an API call 
    async getGifs (search) {
        // making an AJAX request
        try {
            // await keyword indicates to JS engine to wait until promise has been resolved
            await axios({
                method:'GET',
                url: 'https://api.giphy.com/v1/gifs/search',
                dataResponse: 'json',
                    params: {
                        api_key: 'eCFQf1KPHJ1iP8TV7VEGUhOfyupAxC83',
                        q: search
                    }
            }).then(results => {
                results = results.data.data
                // Set the state of our Gifs array based on the response from the API. This will contain the information that we want to display on the page
                this.setState({
                    gifs: results,
                    userHasNotSearched: false,
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    // This represents the scenario that the user did not input a search into the gif search bar and reminds our user to do so...
    renderEmptyState = () => {
        return (
            <div className="gifResults">
            	<p>Search for a gif!</p>
            </div>
        )
    }

    // MAP over the gifs array and construct JSX to represent each unique searched gif item that will be displayed on the page
    renderSearchedGifs = () => {
        const searchedGifs = this.state.gifs.map(gifItem => {
            return (
                // className of each gif list item will be 'gif' unless its url is === to selectedGifUrl; then the className will be 'selectedGif' 
                <li className={this.state.selectedGifUrl === gifItem.images.fixed_width.url ? 'selectedGif' : 'gif'}
                    key={gifItem.id}
                    // when user clicks on gif, gif url is saved in state as 'selectedGifUrl' 
                    onClick={() => this.onSelectedGifChange(gifItem.images.fixed_width.url)}
                >
                    <img src={gifItem.images.fixed_height.url} />
                </li>
            );
        })
        // Returning the array of JSX objects representing our gifs
        return (
            <ul className="gifResults">
                {searchedGifs}
            </ul>
        )
    }


    // This method will
    // 1) update the state of selectedGifUrl each time a new gif is clicked on
    // 2) send gifUrl information to Form component through prop callback function
    onSelectedGifChange = (gifUrl) => {
        this.props.gifParentCallback(gifUrl);
        this.setState({
            selectedGifUrl: gifUrl
        })
    }


    emptySearch = () => {
        this.setState({
            search: '',
        })
    }

    submitOnEnter = (e) => {
        if (e.key === 'Enter') {
            this.getGifs(this.state.search);
        }
    }

    render() {
        return (
            <div className="gifModalBackground">

                <div className="gifModalContainer">
                    <form className="gifModalNav">
                        <i 
                            className="fas fa-times close" 
                            onClick={this.props.toggle}>
                        </i>
                        <input
                            onChange={this.handleChange}
                            name="searchGifs"
                            value={this.state.search} 
                            type="text"
                            onKeyDown={this.submitOnEnter} 
                        />
                        <button onClick={this.handleSubmit}>Find Gif's!</button>
                    </form>
                   
                    {/* if the variable userHasNotSearched is true, return <p>Search for a gif!</p>, otherwise return gif search results  */}
                   { this.state.userHasNotSearched ? this.renderEmptyState() : this.renderSearchedGifs() }
                    
                </div>   
            </div>
        );
    }
}

export default GifFinder;