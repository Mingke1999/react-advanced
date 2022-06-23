import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme1Main from './Context/Theme1/Theme1Main'
import Theme2Main from './Context/Theme2/Theme2Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Theme1Main/>
  <Theme2Main/>
 </div>
);
