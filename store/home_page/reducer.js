import { home_page } from './action';

const InitialState = {};

const  Home_Page = (state = InitialState, action) => {
  switch (action.type) {
    case home_page.GET_CLUSTERS:
      return {
        ...state,
        clusters: action.payload,
      };
  
      case home_page.GET_TOP_NEWS:
        return {
          ...state,
          top_news: action.payload,
        };
    default:
      return state;
  }
}

export default Home_Page;
