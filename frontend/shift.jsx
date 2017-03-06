import React from 'react';
import ReactDOM from 'react-dom';
//components
import Main from './components/main.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<Main/>, root);
});
