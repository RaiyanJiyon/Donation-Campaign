import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDonation } from '../util/addToDb';
import { Helmet } from 'react-helmet';

const DonationDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const integerId = parseInt(id);

    const allDonation = useLoaderData();

    const donationDetail = allDonation.find(donation => donation.id === integerId);

    const { id: donateId, picture, title, description, price, category_bg, text_button_bg } = donationDetail;

    const handleDonate = (donateId) => {
        addToDonation(donateId)
    }

    return (
        <div className='w-11/12 mx-auto mt-10 pb-20'>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className='relative'>
                <img className='rounded-lg w-full h-80 md:h-[700px] object-fill' src={picture} alt="" />
                <div className='absolute bottom-0 w-full bg-[#0B0B0B80] rounded-b-lg py-8 pl-8'>
                    <button onClick={() => handleDonate(donateId)} className='btn btn-lg border-none text-white font-semibold' style={{ backgroundColor: category_bg }}>Donate ${price}</button>
                </div>
            </div>

            <div className='mt-12 space-y-4'>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <p className='text-[#0B0B0BB3]'>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;