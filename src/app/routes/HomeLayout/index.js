import React from 'react';
import PropTypes from 'prop-types';
import HeadNav from '../../components/_layout/_headnav';
import Header from '../../components/_layout/_header';
import MainContent from '../../components/_layout/_main';

const HomeLayout = ({ children }) => (
    <>
        <HeadNav />
        <Header />
        <MainContent>{children}</MainContent>
        <footer className="footer" />
    </>
);

HomeLayout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default HomeLayout;
