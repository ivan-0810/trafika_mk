import { menu } from './action';

const InitialState = {
  is_loading: false
};

const  Menu = (state = InitialState, action) => {
  switch (action.type) {
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