import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Root = () => {
    const location = useLocation();

    return (
        <div>
            <NavBar />
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;