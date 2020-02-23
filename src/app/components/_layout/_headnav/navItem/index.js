import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = React.memo(({ title, path, ...rest }) => (
    <li className="nav-top__item">
        <NavLink
            activeStyle={{
                fontWeight: 'bold',
                borderBottom: '2px solid #ffffff',
            }}
            exact
            className="nav-top__item__link"
            to={path}
            {...rest}>
            {title}
        </NavLink>
    </li>
));
NavItem.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
};
export default NavItem;
