import axios from "axios";

export const menu = {
  GET_TERM_TITLE: 'GET_TERM_TITLE',
  IS_LOADING_TRUE: 'IS_LOADING_TRUE',
  IS_LOADING_FALSE: 'IS_LOADING_FALSE',
  GET_SEARCH_VALUE: 'GET_SEARCH_VALUE'
  };
  
  export const get_Term_Title = data => async dispatch => {
    dispatch({
      type: menu.GET_TERM_TITLE,
      payload: data,
    });
  };
  export const is_loading_true = () => async dispatch => {
    dispatch({
      type: menu.IS_LOADING_TRUE,
    });
  };
  export const is_loading_false = () => async dispatch => {
    dispatch({
      type: menu.IS_LOADING_FALSE,
    });
  };

  export const get_search_value = () => async dispatch => {
      
    const res = await axios(`${process.env.VESNIK_API_URL}views/rest_api?display_id=articles&filters[tid]=72`)
    const data = await res.data;
    await dispatch({
      type: menu.GET_SEARCH_VALUE,
      payload: data
    });
  };


  