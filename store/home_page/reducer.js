import { home_page } from './action';

const InitialState = {};

const  Home_Page = (state = InitialState, action) => {
  switch (action.type) {
    case home_page.CAROUSEL_1_DATA:
      return {
        ...state,
        carousel_1: action.payload,
      };
    case home_page.CAROUSEL_2_DATA:
      return {
        ...state,
        carousel_2: action.payload,
      };
    case home_page.CONTAINER_1_DATA:
      return {
        ...state,
        container_1: action.payload,
      };
    case home_page.CONTAINER_2_DATA:
      return {
        ...state,
        container_2: action.payload,
      };
    case home_page.CONTAINER_3_LEFT_DATA:
      return {
        ...state,
        container_3_left: action.payload,
      };
    case home_page.CONTAINER_3_RIGHT_DATA:
      return {
        ...state,
        container_3_right: action.payload,
      };
    case home_page.CONTAINER_4_DATA:
      return {
        ...state,
        container_4: action.payload,
      };

      case home_page.CONTAINER_5_DATA:
        return {
          ...state,
          container_5: action.payload,
        };
    case home_page.CONTAINER_6_DATA:
      return {
        ...state,
        container_6: action.payload,
      };
    case home_page.CONTAINER_7_LEFT_DATA:
      return {
        ...state,
        container_7_left: action.payload,
      };
    case home_page.CONTAINER_7_RIGHT_DATA:
      return {
        ...state,
        container_7_right: action.payload,
      };

    case home_page.CONTAINER_8_DATA:
      return {
        ...state,
        container_8: action.payload,
      };
    default:
      return state;
  }
}

export default Home_Page;
