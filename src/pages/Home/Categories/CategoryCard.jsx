import React from 'react';

const CategoryCard = ({toy}) => {
    const {imageUrl, name, price, rating}=toy;
    console.log(toy)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;