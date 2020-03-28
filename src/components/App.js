import React from 'react';
import { selectSong } from '../actions';
import SongList from './PostList';
import SongDetail from './SongDetail';
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;
