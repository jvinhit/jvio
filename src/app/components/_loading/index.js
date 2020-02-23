import React from 'react';
import './index.scss';

const Loading = React.memo(() => (
    <div className="loading-wrapper">
        <div className="loader" />
    </div>
));
export default Loading;
