import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/App';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages';
import Contact from './components/pages/Contact';
const Root = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes >
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
        
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

ReactDOM.render( <React.StrictMode> <Root /> </React.StrictMode> , document.getElementById('root') );

reportWebVitals();
