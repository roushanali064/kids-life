import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from "react-icons/fa";

const NewArivial = () => {
    return (
        <div className='mb-28 mt-24'>
            <h3 className='mb-20 text-4xl font-bold text-center text-[#E0035D]'>Customer's Favorites</h3>
            <div className="card lg:card-side bg-base-100 shadow-xl h-96 ">
                <figure className='w-1/2 rounded'><img className='rounded' src="https://i.ibb.co/3zjr0WJ/gallery-1-1.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-yellow-500">Customer Favorites Toys Car</h2>
                    <p className='text-xl font-bold'>Name: <span className='text-[#E0035D]'>Nostalgic Roadster</span></p>
                    <p className='text-xl'>
                        Details: <span className='text-[#E0035D]'>A toy car, in its form, is called a Swamp rocking roll, it can be in the form of a toy car, but it all comes in different forms. For children, they can ride on...</span>
                    </p>
                    <p >Ratings: <Rating
                        className='text-yellow-500'
                        placeholderRating={4.5}
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

export default NewArivial;