import jsonPlaceholder from '../apis/jsonplaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('start fetchposts');
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
  // No logic  here so no need to await for fetch user
};

// Action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get('/users/' + id);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = _.memoize(function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get('/users/' + id);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   });
// });

// Memoize version using lodash
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get('/users/' + id);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
