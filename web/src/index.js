/*
 * @Author: diana
 * @Date: 2023-05-16 15:27:38
 * @LastEditTime: 2023-06-03 00:21:29
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';

import store from './store';

// 合约配置 useContext通信
import MyProvider from './interact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MyProvider>
      <Provider store={store}>
        <RouterProvider router={router} >
        </RouterProvider>
      </Provider>
    </MyProvider>


  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
