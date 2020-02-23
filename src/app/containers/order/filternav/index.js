import React from 'react';
import PropTypes from 'prop-types';
import { FilterList } from '../const';
import './index.scss';

const FilterNav = React.memo(({ onSelect, filterStatus }) => {
    return (
        <nav className="filter-nav">
            <ul className="filter-list">
                {FilterList.map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <li key={index} className={`filter-item ${filterStatus === item.key ? 'active' : ''}`} onClick={() => onSelect(item.key)}>
                        <span className="filter-label">{item.label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
});
FilterNav.propTypes = {
    onSelect: PropTypes.func,
    filterStatus: PropTypes.string,
};
export default FilterNav;
