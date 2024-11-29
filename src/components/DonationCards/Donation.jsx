import React from 'react';
import UseDonationData from '../Hooks/UseDonationData';
import DonateCard from '../DonationCard/DonateCard';

const Donation = () => {
    const {donationData, loading} = UseDonationData();
    // console.log(donationData)
    return (
        <div className='w-11/12 mx-auto mt-24 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                donationData.map(data => (
                    <DonateCard key={data.id} data={data} />
                ))
            }
        </div>
    );
};

export default Donation;