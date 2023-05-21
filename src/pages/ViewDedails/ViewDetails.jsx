import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewDetails = () => {
    const data = useLoaderData()
    const [favorite,setFavorite]=useState(false)
    console.log(data)
    const { name, price, rating, sellerEmail, sellerName, imageUrl, description, availableQuantity } = data
    const handleFavorite=()=>{
        setFavorite(!favorite)
        Swal.fire(
            'Add To Favorite Done!',
            'You clicked the button!',
            'success'
          )
    }
    return (
        <div className='mt-28 mb-28'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-xl font-bold text-[#E0035D]'>Name:</span> {name}</h2>
                    <p><span className='text-xl font-bold'><span className='text-xl font-bold text-[#E0035D]'>Price:</span></span> ${price}</p>
                    <p><span className='text-xl font-bold text-[#E0035D]'>Seller Name:</span> {sellerName}</p>
                    <p><span className='text-x font-bold text-[#E0035D]'>Seller Email:</span> ${sellerEmail}</p>
                    <p><span className='text-xl font-bold text-[#E0035D]'>Available Product:</span> {availableQuantity}</p>

                    <p><span className='text-xl font-bold text-[#E0035D]'>Product Details:</span> {description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleFavorite} disabled={favorite} className="btn bg-[#E0035D] border-none  ">Add To Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;