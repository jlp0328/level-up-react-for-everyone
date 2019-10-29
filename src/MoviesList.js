import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=798d16e44bf2357493e013567298dcd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      const movies = await res.json();

      this.setState({
        movies: movies.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1 rem;
`;
