/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrderList } from './action';
import { Columns, Label } from './const';
import Table from '../../components/table';
import Pagination from '../../components/pagination';
import Breadcrumb from '../../components/breadcrumb';
import FilterNav from './filternav';
import Loading from '../../components/_loading';

const Order = React.memo(props => {
    const { getOrderList, orderList, totalItem, isLoading } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [filterStatus, setFilterStatus] = useState('');

    // load data, paging and filter query change
    useEffect(() => {
        getOrderList({ page: currentPage, pageSize: 10, status: filterStatus });
    }, [currentPage, filterStatus]);

    // event page change
    const onPageChange = pageIndex => {
        setCurrentPage(pageIndex);
    };
    const selectStatus = status => {
        if (filterStatus === status) {
            setFilterStatus('');
            return;
        }
        setFilterStatus(status);
    };

    return (
        <>
            {isLoading && <Loading />}
            <Breadcrumb />
            <FilterNav filterStatus={filterStatus} onSelect={selectStatus} />
            <article className="main-wrapper">
                <div className="main-content">
                    {filterStatus && <div className="order-header">{Label.count_filter(totalItem)}</div>}
                    <Table columns={Columns} datasource={orderList} />
                    {totalItem && <Pagination initialPage={currentPage} totalItem={totalItem} itemsPerPage={10} handlePageChange={onPageChange} />}
                </div>
            </article>
        </>
    );
});
Order.propTypes = {
    getOrderList: PropTypes.func,
    orderList: PropTypes.array,
    totalItem: PropTypes.number,
    isLoading: PropTypes.bool,
};
const mapStateToProps = state => {
    const {
        orderReducer: { orderList, isLoading, err, totalItem },
    } = state;
    return {
        orderList,
        isLoading,
        err,
        totalItem,
    };
};
const mapDispatchToProps = {
    getOrderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
