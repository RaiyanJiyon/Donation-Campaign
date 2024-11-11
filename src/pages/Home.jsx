import React from 'react';
import Banner from '../components/Banner/Banner';
import Donation from '../components/DonationCards/Donation';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Donation Campaign</title>
            </Helmet>
            <Banner />
            <Donation />
        </div>
    );
};

export default Home;