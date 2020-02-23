import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

const Breadcrumb = React.memo(({ history }) => (
    <div className="breadcrumb" onClick={() => history.goBack()}>
        <span className="icon">{'<'} </span>
        <span>back</span>
    </div>
));
Breadcrumb.propTypes = {
    history: PropTypes.object,
};
export default withRouter(Breadcrumb);
