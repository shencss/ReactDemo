import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReportApp from './containers/ReportApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <ReportApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
