import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './table-header';
import TableRow from './table-row';
import './index.scss';

const Table = React.memo(({ datasource, columns }) => {
    return (
        <div className="table-container" role="table" aria-label="Destinations">
            <TableHeader columns={columns} />
            {datasource.map((item, index) => (
                <TableRow key={index} row={item} columns={columns} />
            ))}
        </div>
    );
});
Table.propTypes = {
    datasource: PropTypes.array,
    columns: PropTypes.array,
};
export default Table;
