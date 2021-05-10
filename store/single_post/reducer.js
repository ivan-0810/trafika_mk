import { single_post } from './action';

const InitialState = {};

const Single_Post = (state = InitialState, action) => {
  switch (action.type) {
    case single_post.GET_SINGLE_POST:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Single_Post;
