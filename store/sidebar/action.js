export const sidebar = {
  GET_ANALIZI_TEMI: 'GET_ANALIZI_TEMI',
};

export const get_Analizi_Temi = data => async dispatch => {
  dispatch({
    type: sidebar.GET_ANALIZI_TEMI,
    payload: data,
  });
};
