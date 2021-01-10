import { Component } from 'react';
import Nav from './Nav'
import MovieList from './MovieList';
import '../App.css'
import Pages from './Pages'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      resultsAmt: 0,
      curPage: 1
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


  render() {
    const pagesAmt = Math.floor(this.state.resultsAmt / 20);
    return (
      <div className="App">
        <Nav handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movies={this.state.movies}/>
        { this.state.resultsAmt > 20 ? <Pages pages={pagesAmt} nextPage={this.nextPage} curPage={this.state.curPage}/> : ''}
      </div>
    )
  };
}

export default App;
