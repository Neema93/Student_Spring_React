import { legacy_createStore as createStore, combineReducers,applyMiddleware} from "redux";
import { student } from "../Reducers/student";
import {thunk} from 'redux-thunk';
// eslint-disable-next-line import/no-anonymous-default-export
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            student
        }),applyMiddleware(thunk)
    );
    return store;
}