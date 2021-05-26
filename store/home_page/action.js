
export const home_page = {
  GET_CLUSTERS: 'GET_CLUSTERS',
  GET_TOP_NEWS: 'GET_TOP_NEWS',
};

export const get_all_clusters = data => async dispatch => {
  await dispatch({
    type: home_page.GET_CLUSTERS,
    payload: data,
  });
};

export const get_top_news = data => async dispatch => {
  await dispatch({
    type: home_page.GET_TOP_NEWS,
    payload: data,
  });
};