import Tabbar from './components/tabbar.jsx';
import ReactDOM from 'react-dom/client';
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { tabbarData } from '../data.js';

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(
    <Provider store={store}>
        <Tabbar data={tabbarData}></Tabbar>
    </Provider>
    
);

