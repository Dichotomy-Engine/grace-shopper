import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer as user, usersReducer as users } from './user'
import { reducer as formReducer } from 'redux-form'
import { addProduct } from './addForm'
import { editForm } from './editForm'

const reducer = combineReducers({
  user,
  users,
  form: formReducer,
  addProduct,
  editForm
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
