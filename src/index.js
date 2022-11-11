import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './demo';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Demo />
<h2>{element}</h2>    
    </>
    
);

