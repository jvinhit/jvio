import React from 'react';
import PropTypes from 'prop-types';

const TableRow = React.memo(({ row, columns }) => (
    <div className="flex-table row" role="rowgroup">
        {columns.map((col, index) => (
            <div key={index} className="flex-row" role="cell">
                {row[col.name]}
            </div>
        ))}
    </div>
));
TableRow.propTypes = {
    row: PropTypes.object,
    columns: PropTypes.array,
};
export default TableRow;
