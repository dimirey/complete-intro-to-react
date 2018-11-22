// @flow

import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import type { RouterHistory } from 'react-router-dom';
// import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends React.Component {
  static contextTypes = {
    // history: object
  };
  // props: {
  //   searchTerm: string,
  //   handleSearchTermChange: Function,
  //   history: RouterHistory
  // };
  goToSearch = event => {
    event.preventDefault();
    // this.props.history.push('/search');
  };
  render() {
    
    // const link = <a href={this.makeHref('https://i.imgur.com/46S8M9M.jpg')}>test</a>;

    return (
      <div className="landing">
        <h1>i love bebisas</h1>
        <a href='https://i.imgur.com/46S8M9M.jpg'> nya </a>
        {/* <Link to="/search">or Browse All</Link> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
