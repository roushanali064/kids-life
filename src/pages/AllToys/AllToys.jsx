import React, { useEffect, useState } from 'react';
import ToysTable from './ToysTable';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://kid-life-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='mt-28 mb-28'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToysTable
                                key={toy._id}
                                toy={toy}
                            ></ToysTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;