import React from 'react';
import { getToDonation } from '../util/addToDb';
import { useLoaderData } from 'react-router-dom';

const Donation = () => {
    const donationDetailsId = getToDonation();

    const allDonation = useLoaderData();

    const filteredDonations = allDonation.filter(donation =>
        donationDetailsId.includes(donation.id)
    );

    return (
        <div className='w-11/12 mx-auto mt-10 pb-10 grid lg:grid-cols-2 gap-6'>
            {
                filteredDonations.map(donation => (
                    <div key={donation.id} className='flex flex-col md:flex-row rounded-lg' style={{ backgroundColor: donation.card_bg }}>
                        <div className='md:w-2/5'>
                            <img className='w-full h-full rounded-l-lg' src={donation.picture} alt="" />
                        </div>
                        <div className='m-4 space-y-3'>
                            <button className='btn btn-sm font-bold' style={{ backgroundColor: donation.category_bg, color: donation.text_button_bg }}>{donation.category}</button>
                            <h2 className='text-2xl font-bold md:min-h-16'>{donation.title}</h2>
                            <p className='text-sm font-semibold' style={{ color: donation.text_button_bg }}>${donation.price.toFixed(2)}</p>
                            <button className='btn font-bold text-white' style={{ backgroundColor: donation.category_bg }}>View Details</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Donation;