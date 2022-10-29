import Tabbar from './components/tabbar.jsx';
import ReactDOM from 'react-dom/client';
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { tabbarData, sliderData } from '../data.js';

const linkArr = []
const head = document.head
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

sliderData.map((elementArr) => {
    elementArr.map((element) => {
        if (!linkArr.includes(element.url)) {
            linkArr.push(element.url)
        } 
    })
})

linkArr.map((link) => {
    let node = document.createElement('link') 
    node.setAttribute('as', 'image')
    node.setAttribute('rel', 'preload')
    node.setAttribute('href',link )
    head.appendChild(node)
})

root.render(
    <Provider store={store}>
        <Tabbar data={tabbarData}></Tabbar>
    </Provider>
    
);

