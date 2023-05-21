import React from 'react';
import { Link } from 'react-router-dom';

const ToysTable = ({ toy }) => {
    const { name, imageUrl, price, subCategory, availableQuantity, sellerName, _id } = toy;
    console.log(toy)
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Name: {name}</div>
                        <div className="text-sm opacity-50">Category: {subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
            {sellerName}
            </td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <th>
                <Link to={`/toy/${_id}`}>
                <button className="btn btn-success">View details</button>
                </Link>
            </th>
        </tr>
    );
};

export default ToysTable;