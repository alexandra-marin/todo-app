import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Todo</h1>
        <p>React / Redux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}