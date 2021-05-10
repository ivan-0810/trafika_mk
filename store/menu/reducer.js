import { menu } from './action';

const InitialState = {
  is_loading: false
};

const  Menu = (state = InitialState, action) => {
  switch (action.type) {
    case menu.GET_TERM_TITLE:
      return {
        ...state,
        term_id : action.payload.term_id,
        title: action.payload.title
      };
      case menu.IS_LOADING_TRUE:
        return {
          ...state,
         is_loading: true
        };
        case menu.IS_LOADING_FALSE:
        return {
          ...state,
         is_loading: false
        };
        case menu.GET_SEARCH_VALUE:
          return {
            ...state,
           search_val: action.payload
          };
      default:
        return state;
    }
  }

  export default Menu