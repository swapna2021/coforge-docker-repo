import { thunk } from "redux-thunk";
import StudentReducer from "./redux/StudentReducer";
import {createStore,applyMiddleware} from 'redux'

const store=createStore(StudentReducer,applyMiddleware(thunk))
export default store