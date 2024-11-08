import React from 'react';
import UseDonationData from '../Hooks/UseDonationData';
import DonateCard from '../DonateCard/DonateCard';

const Donation = () => {
    const {donationData, loading} = UseDonationData();
    // console.log(donationData)
    return (
        <div className='w-11/12 mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                donationData.map(data => (
                    <DonateCard key={data.id} data={data} />
                ))
            }
        </div>
    );
};

export default Donation;