import React from 'react';
import { Provider } from 'react-redux';
import Router from './routes';

import createStore from './stores';

export default React.memo(() => (
    <Provider store={createStore()}>
        <Router />
    </Provider>
));
