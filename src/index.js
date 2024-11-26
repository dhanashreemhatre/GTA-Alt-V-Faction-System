import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (window.alt === undefined) {
  window.alt = {
    emit: () => {},
    on: () => {},
    off:()=>{}
  };
}

const openFactionInvitationModal = () => {
  const setupModel = document.getElementById('initialSetupModel');
  if (setupModel) {
    setupModel.classList.add('active'); // Adds the 'active' class to the element
  } else {
    console.error('Element with ID "initialSetupModel" not found.');
  }
};

window.openFactionInvitationModal = openFactionInvitationModal;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
