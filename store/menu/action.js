import axios from "axios";

export const menu = {

  GET_SEARCH_VALUE: 'GET_SEARCH_VALUE'
  };
  
  export const get_search_value = () => async dispatch => {
      
    const res = await axios(`${process.env.VESNIK_API_URL}views/rest_api?display_id=articles&filters[tid]=72`)
    const data = await res.data;
    await dispatch({
      type: menu.GET_SEARCH_VALUE,
      payload: data
    });
  };


  