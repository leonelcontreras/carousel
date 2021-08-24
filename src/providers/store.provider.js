import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '../redux/reducers'

const store = createStore(combineReducers({
  ...reducers
}))

const StoreProvider = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider
