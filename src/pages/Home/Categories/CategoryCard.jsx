import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from "react-icons/fa";

const CategoryCard = ({ toy }) => {
    const { imageUrl, name, price, rating } = toy;
    console.log(toy)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Name: <span className='text-[#E0035D]'>{name}</span></h2>
                    <p className='text-xl font-bold'>Price: <span className='text-[#E0035D]'>${price}</span></p>
                    <p >Ratings: <Rating
                        className='text-yellow-500'
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalf />}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar />}
                    /></p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;