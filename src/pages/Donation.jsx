import React, { useState } from 'react';
import { getToDonation } from '../util/addToDb';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Donation = () => {
    const [showAll, setShowAll] = useState(false);
    const donationDetailsId = getToDonation();
    const allDonation = useLoaderData();
    const filteredDonations = allDonation.filter(donation =>
        donationDetailsId.includes(donation.id)
    );

    const donationsToShow = showAll ? filteredDonations : filteredDonations.slice(0, 4);

    return (
        <div className='w-11/12 mx-auto mt-10 pb-10 '>
            <Helmet>
                <title>Donation | Donation Campaign</title>
            </Helmet>

            {
                filteredDonations.length > 0 ?
                    <div className='grid lg:grid-cols-2 gap-6'>
                        {
                            donationsToShow.map(donation => (
                                <div key={donation.id} className='flex flex-col md:flex-row rounded-lg' style={{ backgroundColor: donation.card_bg }}>
                                    <div className='md:w-2/5'>
                                        <img className='w-full h-full rounded-l-lg' src={donation.picture} alt="" />
                                    </div>
                                    <div className='m-4 space-y-3'>
                                        <button className='btn btn-sm font-bold' style={{ backgroundColor: donation.category_bg, color: donation.text_button_bg }}>{donation.category}</button>
                                        <h2 className='text-2xl font-bold md:min-h-16'>{donation.title}</h2>
                                        <p className='text-sm font-semibold' style={{ color: donation.text_button_bg }}>${donation.price.toFixed(2)}</p>
                                        <Link className='btn font-bold text-white' style={{ backgroundColor: donation.category_bg }}>View Details</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className='h-screen flex flex-col items-center justify-center'>
                        <h1 className='text-4xl font-bold'>No Donation Is Done Yet</h1>
                        <p>Please add donation for see all your donation list.</p>
                    </div>

            }
            {
                !showAll && filteredDonations.length > 4 &&
                <div className='flex justify-center mt-10'>
                    <button onClick={() => setShowAll(true)} className='btn bg-[#009444] text-white font-bold'>See All</button>
                </div>
            }
        </div>
    );
};

export default Donation;