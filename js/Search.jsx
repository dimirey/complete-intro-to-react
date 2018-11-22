// @flow

import React from 'react';
import { connect } from 'react-redux';
// import ShowCard from './ShowCard';
// import Header from './Header';

const Search = () => (
  <div className="nya">
    {/* <Header showSearch /> */}
    <div>
      {/* {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)} */}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
