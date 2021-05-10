import axios from 'axios';

export const home_page = {
    CAROUSEL_1_DATA: 'CAROUSEL_1_DATA',
    CAROUSEL_2_DATA: 'CAROUSEL_2_REQUES',
    CONTAINER_1_DATA: 'CONTAINER_1_DATA',
    CONTAINER_2_DATA: 'CONTAINER_2_DATA',
    CONTAINER_3_LEFT_DATA: 'CONTAINER_3_LEFT_DATA',
    CONTAINER_3_RIGHT_DATA: 'CONTAINER_3_RIGHT_DATA',
    CONTAINER_4_DATA: 'CONTAINER_4_DATA',
    CONTAINER_5_DATA: 'CONTAINER_5_DATA',
    CONTAINER_6_DATA: 'CONTAINER_6_DATA',
    CONTAINER_7_LEFT_DATA: 'CONTAINER_7_LEFT_DATA',
    CONTAINER_7_RIGHT_DATA: 'CONTAINER_7_RIGHT_DATA',
    CONTAINER_8_DATA: 'CONTAINER_8_DATA',

}

export const get_Carousel_1_Data = (data) =>async (dispatch) => {

await dispatch({
      type: home_page.CAROUSEL_1_DATA,
      payload: data,
    }) 
  
 
  }
  export const get_Carousel_2_Data = (data) =>async (dispatch) => {
   
    return dispatch({
      type: home_page.CAROUSEL_2_DATA,
      payload: data,
    })
  }
  export const get_Container_1_Data = (data) =>async (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_1_DATA,
      payload: data,
    })
  }
  export const get_Container_2_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_2_DATA,
      payload: data,
    })
  }
  export const get_Container_3_left_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_3_LEFT_DATA,
      payload: data,
    })
  }
  export const get_Container_3_right_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_3_RIGHT_DATA,
      payload: data,
    })
  }
  export const get_Container_4_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_4_DATA,
      payload: data,
    })
  }

  export const get_Container_5_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_5_DATA,
      payload: data,
    })
  }
  export const get_Container_6_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_6_DATA,
      payload: data,
    })
  }
  export const get_Container_7_left_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_7_LEFT_DATA,
      payload: data,
    })
  }
  export const get_Container_7_right_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_7_RIGHT_DATA,
      payload: data,
    })
  }
  export const get_Container_8_Data = (data) => (dispatch) => {
    return dispatch({
      type: home_page.CONTAINER_8_DATA,
      payload: data,
    })
  }