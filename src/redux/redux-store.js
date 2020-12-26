import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// let store = createStore(reducers, applyMiddleware(thunk) )
let store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTools) )

export default store;