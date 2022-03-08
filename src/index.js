import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import GlobleStyle from './components/GlobleStyle/GlobleStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobleStyle>
      <App/>
    </GlobleStyle>
  </React.StrictMode>,
  document.getElementById('root')
);
