import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /* componentWillMount() {
    console.log('componentWillMount...');
  }

  //When Component Updates this runs
  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  componentWillUpdate() {
    console.log('componentDidUpdate...');
  }

  //When component receives new property this will Run
  componentWillReceiveProps(nextprops, nextstate) {
    console.log('componentDidUpdate...');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...');
  } */

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
