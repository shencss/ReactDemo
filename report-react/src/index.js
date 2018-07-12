import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReportApp from './containers/ReportApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={ReportApp}>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
