import React, { Component } from "react";
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import MovieGallery from './MovieGallery'


class MovieForm extends Component{

  constructor() {
    super();

    this.state = {
      query: '',
      movies: {},
      current: 0
    };
    // Example: https://api.themoviedb.org/3/search/movie?api_key=ec6a61d89d885a0573b3aabfa99890f0&query=avengers
    this.baseUrl = 'https://api.themoviedb.org/3/search/movie';
    this.apiKey ='ec6a61d89d885a0573b3aabfa99890f0';
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {

    let url = `${this.baseUrl}?api_key=${this.apiKey}&query=${this.state.query}`;
    console.log(url);
    // Get Data
    axios.get(url).then((response) => {
      console.log(response);

      this.setState({
        movies: response.data.results,
        current: 0
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
  }

  inputChangeHandler(event) {
    this.setState({ query: event.target.value });
    let url = `${this.baseUrl}?api_key=${this.apiKey}&query=${this.state.query}`;
    console.log(url);
    // Get Data
    axios.get(url).then((response) => {
      console.log(response);

      this.setState({
        movies: response.data.results,
        current: 0
      });

      console.log(this.state.movies);
    }).catch((error) => {
      console.log(error);
    });
    this.setState({ query: event.target.value });
  }


  render(){
    return(
      <div>
        <Input
          onChange={this.inputChangeHandler}
          label='Enter a Movie'
          placeholder='Search Movie....'
          query={this.state.query}

        />
        <Button onClick={this.clickHandler}>
          Search
        </Button>

        <MovieGallery movies={this.state.movies}/>
        <MovieDetail current={this.state.current}
                     movies={this.state.movies}/>

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieForm;
