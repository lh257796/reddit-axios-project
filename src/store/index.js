import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";


const site = (state = [], action) => {
    if (action.type === 'SET_SITE') {
        state = action.site
    }

  return state;
};

const search = (state=[], action) => {
    if (action.type === 'SET_SEARCH'){
        state = action.search
    }
    return state
}

export const setSite = (str) => {
    return async(dispatch)=> {
        const res = await axios.get(str)
        const data = res.data.data.children
        dispatch({type: 'SET_SITE', site: data})
    }
};

export const setSearch = (str) => {
    return async(dispatch) => {
        const res= await axios.get(str)
        const data = res.data.data.children
        dispatch({type: 'SET_SEARCH', search: data})
    }
}

const reducer = combineReducers({
    site,
    search
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
