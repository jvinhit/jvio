import React from 'react';

const TableRow = ({ row, columns }) => (
    <div className="flex-table row" role="rowgroup">
        {columns.map((col, index) => (
            <div key={index} className="flex-row" role="cell">
                {row[col.name]}
            </div>
        ))}
    </div>
);

export default TableRow;
