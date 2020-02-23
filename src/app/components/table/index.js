import React from 'react';
import TableHeader from './table-header';
import TableRow from './table-row';
import './index.scss';

const Table = React.memo(({ datasource, columns, ...resp }) => {
    console.log(datasource);
    return (
        <div className="table-container" role="table" aria-label="Destinations">
            <TableHeader columns={columns} />
            {datasource.map((item, index) => (
                <TableRow key={index} row={item} columns={columns} />
            ))}
            {/* <div className="flex-table row" role="rowgroup">
                <div className="flex-row" role="cell">
                    Canada
                </div>
                <div className="flex-row" role="cell">
                    Vancouver to Victoria and Butchart Gardens Tour{' '}
                </div>
            </div> */}
        </div>
    );
});

export default Table;
