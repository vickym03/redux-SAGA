import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import "bootstrap/dist/css/bootstrap.min.css"
//redux setup
//import * as serviceWorker from "./serviceWorker"
import { Provider } from 'react-redux';
import store from './redux/store';

//import registerServiceWorker from 'react-service-worker';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
);

//registerServiceWorker.unregister()

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
