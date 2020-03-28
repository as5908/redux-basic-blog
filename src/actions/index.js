import jsonPlaceholder from '../apis/jsonplaceholder';
// Action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/pots');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};
