import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const integerId = parseInt(id);
    console.log(typeof integerId);

    const allDonation = useLoaderData();
    console.log(allDonation);

    const donationDetail = allDonation.find(donation => donation.id === integerId);

    console.log(donationDetail)

    const { picture, title, description, price, category_bg, text_button_bg } = donationDetail;

    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='relative'>
                <img className='rounded-lg w-full h-[700px] object-fill' src={picture} alt="" />
                <div className='absolute bottom-0 w-full bg-[#0B0B0B80] rounded-b-lg py-8 pl-8'>
                    <button className='btn btn-lg border-none text-white font-semibold' style={{ backgroundColor: category_bg }}>Donate ${price}</button>
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