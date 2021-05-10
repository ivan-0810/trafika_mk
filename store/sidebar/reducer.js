import { sidebar } from './action';

const InitialState = {};

const  Sidebar = (state = InitialState, action) => {
  switch (action.type) {
    case sidebar.GET_ANALIZI_TEMI:
      return {
        ...state,
        analizi_temi : action.payload,
      };
      default:
        return state;
    }
  }

  export default Sidebar