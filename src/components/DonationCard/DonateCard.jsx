import React from 'react';
import { NavLink } from 'react-router-dom';

const DonateCard = ({ data }) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = data;

    return (
        <NavLink to={`/home/${id}`} className="card card-compact rounded-lg shadow-lg cursor-pointer" style={{backgroundColor: card_bg}}>
            <figure>
                <img
                className='w-full md:w-[312px], h-[194px]'
                    src={picture}
                    alt={`${picture} image`} />
            </figure>
            <div className="card-body">
            <button className="btn btn-sm w-[40%]" style={{backgroundColor: category_bg}}>{category}</button>
                <h2 className="card-title" style={{color: text_button_bg}}>{title}</h2>
            </div>
        </NavLink>
    );
};

export default DonateCard;