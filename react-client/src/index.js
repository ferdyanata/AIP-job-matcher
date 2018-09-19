import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import 'semantic-ui-css/semantic.min.css';
import history from './helpers/history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
