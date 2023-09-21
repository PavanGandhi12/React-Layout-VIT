import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homes from './Components/Homes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './Components/Aboutus';
import Testimonials from './Components/Testimonials';

import Footer from './Components/Footer';
import WhyWeDifferent from './Components/WhyWeDifferent';
import Clients from './Components/OurClients';
import WhatWeDo from './Components/WhatWeDo';
import WhyUs from './Components/WhyUs';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homes />
    <Aboutus />
    <WhyWeDifferent />
    <WhatWeDo />
    <WhyUs />
    <Testimonials />
    <Clients />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
