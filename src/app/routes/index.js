import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import RouterConfig from './config';
import HomeLayout from './HomeLayout';

const history = createBrowserHistory();

const AppRoute = ({ component: Component, layout: Layout }) => (
    <Route
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);
AppRoute.propTypes = {
    component: PropTypes.elementType,
    layout: PropTypes.elementType,
};

export default React.memo(() => {
    const renderRouteList = () =>
        Object.keys(RouterConfig).map(itemKey => {
            const { path, component, key } = RouterConfig[itemKey];
            return <AppRoute exact key={key} path={path} layout={HomeLayout} component={component} />;
        });

    return (
        <Router history={history}>
            <Switch>{renderRouteList()}</Switch>
        </Router>
    );
});
