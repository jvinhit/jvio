import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.scss';
import RouteConfig from '../../../routes/config';
import Constants from '../../const';

const Header = React.memo(props => {
    const { history } = props;

    const getItem = key => {
        const { pathname } = history.location;
        const path = pathname.split('/')[1];

        if (path) {
            return Constants.Order[key](RouteConfig[path].name);
        }
        return Constants.Order[key](RouteConfig['home'].name);
    };
    return (
        <header className="header">
            <div className="header-content">
                <h2>{getItem('title')}</h2>
                <span>{getItem('summary')}</span>
            </div>
        </header>
    );
});
Header.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string,
    history: PropTypes.object,
};

export default withRouter(Header);
