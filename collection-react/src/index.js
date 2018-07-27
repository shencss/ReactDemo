import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CollectionApp from './containers/CollectionApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CollectionApp />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
