import { Component } from 'react';
import Nav from './Nav'
import MovieList from './MovieList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }

    this.apiKey = "c4c81ee0662a6bb5b3b0495520d6c51a"
  }


  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results]});
    })
  }


  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }


  render() {
    return (
      <div className="App">
      <Nav handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <MovieList movies={this.state.movies}/>
      </div>
    )
  };
}

export default App;
