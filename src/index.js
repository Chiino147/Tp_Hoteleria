import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DivPrincipal from './js/componentes/DivPrincipal';
import Header from './js/Header';
import { BrowserRouter} from 'react-router-dom';


//Se agarra el el div root y se llama la funcion APP
const principal = ReactDOM.createRoot(document.getElementById("principal"));
const root = ReactDOM.createRoot(document.getElementById('root'));
principal.render(
  <BrowserRouter>
    <DivPrincipal 
    />
  </BrowserRouter>



)
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
