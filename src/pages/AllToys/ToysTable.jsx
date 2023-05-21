import React from 'react';

const ToysTable = ({ toy }) => {
    const { name, imageUrl, price, subCategory, availableQuantity, sellerName } = toy;
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
                <button className="btn btn-ghost btn-xs">View details</button>
            </th>
        </tr>
    );
};

export default ToysTable;