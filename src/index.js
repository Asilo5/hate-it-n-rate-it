import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Containers/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const router = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  
  ReactDOM.render(router, document.getElementById('root'));

<<<<<<< HEAD

=======
serviceWorker.unregister();
>>>>>>> 903f44b34fb2a0e56debeb09a91c562e8557a7f9
