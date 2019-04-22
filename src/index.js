import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp({
        apiKey: "AIzaSyAFvTEQ3foDYQ3qnoOjqV4HFvClGQ6wlfE",
        authDomain: "notariatula.firebaseapp.com",
        databaseURL: "https://notariatula.firebaseio.com",
        projectId: "notariatula",
        storageBucket: "notariatula.appspot.com",
        messagingSenderId: "448874796699"
    })


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
