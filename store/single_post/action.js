export const single_post = {
    GET_SINGLE_POST: 'GET_SINGLE_POST',
  };
  
  export const get_single_post = data => async dispatch => {
    dispatch({
      type: single_post.GET_SINGLE_POST,
      payload: data,
    });
  };
  