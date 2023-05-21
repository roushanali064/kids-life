import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTable = ({ toy, handleDelate }) => {
    const { imageUrl, subCategory, sellerName, sellerEmail, _id } = toy
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
                        <div className="font-bold">{sellerName}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerEmail}
            </td>
            <td>
                <Link to={`/updateToy/${_id}`}><button className='btn btn-primary'>Update Data</button></Link>
            </td>
            <th>
                <button onClick={() => handleDelate(_id)} className="btn btn-secondary">Delate</button>
            </th>
        </tr>
    );
};

export default MyToysTable;