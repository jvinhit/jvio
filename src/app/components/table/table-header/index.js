import React from 'react';

import './index.scss';

const TableHeader = React.memo(({ columns, ...rest }) => {
    const renderItem = () =>
        columns.map((item, index) => (
            <div key={index} className="flex-row" role="columnheader">
                {item.label}
            </div>
        ));

    return (
        <div className="flex-table table-header" role="rowgroup">
            {renderItem()}
        </div>
    );
});

export default TableHeader;
