export const single_post = {
    GET_SINGLE_POST: 'GET_SINGLE_POST',
    GET_SINGLE_LINK: 'GET_SINGLE_LINK',
  };
  
  export const get_single_post = data => async dispatch => {
    dispatch({
      type: single_post.GET_SINGLE_POST,
      payload: data,
    });
  };
  export const get_single_link = data => async dispatch => {
    dispatch({
      type: single_post.GET_SINGLE_LINK,
      payload: data,
    });
  };