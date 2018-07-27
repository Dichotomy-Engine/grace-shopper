import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { meReducer as me, usersReducer as users } from './user'
import { reducer as form } from 'redux-form'
import products from './products'
import reviews from './reviews'
import { reviewForm } from './reviewForm'
import { cartReducer as cart } from './cart'

const reducer = combineReducers({
  me,
  users,
  form,
  products,
  cart,
  reviews,
  reviewForm
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './cart'
export * from './reviews'
export * from './reviewForm'

