import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils';

const TableRow = React.memo(({ row, columns }) => {
    const renderCell = (value, col) => {
        switch (col) {
            case 'order_date':
                return formatDate(value);
            case 'total_amount':
                return Number(value).toLocaleString();
            default:
                return value;
        }
    };
    return (
        <div className="flex-table row" role="rowgroup">
            {columns.map((col, index) => (
                <div key={index} className="flex-row" role="cell">
                    {renderCell(row[col.name], col.name)}
                </div>
            ))}
        </div>
    );
});
TableRow.propTypes = {
    row: PropTypes.object,
    columns: PropTypes.array,
};
export default TableRow;
