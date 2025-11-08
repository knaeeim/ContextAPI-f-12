import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingPage from './LoadingPage';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[700px]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;