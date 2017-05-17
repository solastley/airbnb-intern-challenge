import React, { Component } from 'react';

const styles = {};

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.name}</p>
      </div>
    );
  }
}
