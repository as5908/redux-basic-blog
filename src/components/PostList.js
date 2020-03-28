import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div className="ui divided list">Post List</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

// const mapFunctionToProps = () => {};

export default connect(null, {
  fetchPosts
})(PostList);
