import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FortNiteApp from './containers/FortNiteApp';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <FortNiteApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
