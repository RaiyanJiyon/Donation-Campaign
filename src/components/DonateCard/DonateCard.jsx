import React from 'react';

const DonateCard = ({ data }) => {
    console.log(data)
    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = data;

    return (
        <div className="card card-compact rounded-lg shadow-lg">
            <figure>
                <img
                className='w-[312px], h-[194px]'
                    src={picture}
                    alt={`${picture} image`} />
            </figure>
            <div className="card-body">
            <button className="btn btn-sm w-[40%]">{category}</button>
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

export default DonateCard;