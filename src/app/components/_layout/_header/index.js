import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Constants } from '../../const';

const Header = React.memo(({ title = Constants.Order.title, summary = Constants.Order.summary }) => (
    <header className="header">
        <div className="header-content">
            <h2>{title}</h2>
            <span>{summary}</span>
        </div>
    </header>
));
Header.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string,
};

export default Header;
