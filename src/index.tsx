import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import {Provider} from "react-redux";
import {store} from "./Redux/redux-store";


//export const rerenderTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>
        ,
        document.getElementById('root')
    )
//}

//rerenderTree();

//store.subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
