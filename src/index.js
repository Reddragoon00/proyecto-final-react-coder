import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyCyuJ8FwZJHM7m-8M0eTLdwlKE0tl3MA5U",
  authDomain: "ecommerce-ctb.firebaseapp.com",
  projectId: "ecommerce-ctb",
  storageBucket: "ecommerce-ctb.appspot.com",
  messagingSenderId: "297784538129",
  appId: "1:297784538129:web:d6ce8450f059828fafadb0"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
