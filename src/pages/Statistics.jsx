import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getToDonation } from '../util/addToDb';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    const totalDonations = useLoaderData();
    const donationsMade = getToDonation().length; // Assuming getToDonation() returns an array of donation IDs

    const data = [
        { name: 'Your Donations', value: donationsMade },
        { name: 'Total Donations', value: totalDonations.length - donationsMade }
    ];

    const COLORS = ['#FF444A', '#00c49f'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{ width: '100%', height: '500px', marginBottom: '100px' }}>
            <Helmet>
                <title>Statistics | Donation Campaign</title>
            </Helmet>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className='flex flex-col md:flex-row justify-center gap-12 md:w-1/2 mx-auto -mt-10'>
                <div className='flex justify-center items-center gap-4'>
                    <h3 className='font-medium'>Your Donation</h3>
                    <div className='w-[100px] h-[12px] bg-[#00C49F] rounded-sm'></div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <h3 className='font-medium'>Total Donation</h3>
                    <div className='w-[100px] h-[12px] bg-[#FF444A] rounded-sm'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
