/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrderList } from './action';
import { Columns } from './const';
import Table from '../../components/table';
import Pagination from '../../components/pagination';
import Breadcrumb from '../../components/breadcrumb';

const Order = React.memo(props => {
    const { getOrderList, orderList } = props;
    const [currentPage, setCurrentPage] = useState(1);

    // first load data
    useEffect(() => {
        console.log('currentPage: ', currentPage);
        getOrderList({ page: currentPage, pageSize: 10 });
    }, [currentPage]);

    // event page change
    const onPageChange = pageIndex => {
        console.log(pageIndex);
        setCurrentPage(pageIndex);
    };

    return (
        <>
            <Breadcrumb />
            <nav className="nav-left">
                <ul className="nav-top__list">
                    <li className="nav-top__item">
                        <span className="nav-top__item__link" href="home">
                            Process
                        </span>
                    </li>
                </ul>
            </nav>
            <article className="main-wrapper">
                <div className="main-content">
                    <div className="order-header">You have 101 orders, waiting for your confirm!</div>
                    <Table columns={Columns} datasource={orderList} />
                    <Pagination initialPage={currentPage} totalItems={100} itemsPerPage={10} handlePageChange={onPageChange} />
                </div>
            </article>
        </>
    );
});
Order.propTypes = {
    getOrderList: PropTypes.func,
    orderList: PropTypes.array,
};
const mapStateToProps = state => {
    const {
        orderReducer: { orderList, isLoading, err },
    } = state;
    return {
        orderList,
        isLoading,
        err,
    };
};
const mapDispatchToProps = {
    getOrderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
