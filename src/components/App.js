import React, { Component } from 'react';
import Nav from './Nav'
import MovieList from './MovieList';
import '../App.css'
import Pages from './Pages'
import MovieInfo from './MovieInfo'
import SignUp from './SignUp';
import {AuthProvider} from '../contexts/AuthContext'
class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      resultsAmt: 0,
      curPage: 1,
      curMovie: null
    }

    this.apiKey = "c4c81ee0662a6bb5b3b0495520d6c51a"
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], resultsAmt: data.total_results});
    })
  }


  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }


  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], curPage: pageNumber});
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({ curMovie: newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({curMovie:null})
  }

  render() {
    const pagesAmt = Math.floor(this.state.resultsAmt / 20);
    return (
      <AuthProvider className="App">
        <SignUp />
        {/* <Nav handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {this.state.curMovie == null ? <div handleSubmit={this.handleSubmit} handleChange={this.handleChange}><MovieList movies={this.state.movies} viewMovieInfo={this.viewMovieInfo}/></div> : <MovieInfo curMovie={this.state.curMovie} closeMovieInfo={this.closeMovieInfo}/>}
        { this.state.resultsAmt > 20 && this.state.curMovie == null ? <Pages pages={pagesAmt} nextPage={this.nextPage} curPage={this.state.curPage}/> : ''} */}
        {/* try to hide search bar when looking at movie details */}
      </AuthProvider>
    )
  };
}

export default App;
