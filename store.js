import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import course from './reducers';
import thunk from 'redux-thunk';


export default createStore(course, composeWithDevTools(applyMiddleware(thunk,logger)));
