import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import home_page from './home_page/reducer'
import menu from './menu/reducer' 
import single_post from './single_post/reducer';
import spinner from './spinner/reducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
   home_page,
   menu,
   single_post,
   spinner
})

const reducer = (state, action) => {
  // console.log(action, 'od store');
  if (action.type === HYDRATE) {

    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
