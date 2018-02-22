import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import App from './app/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

cont createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
