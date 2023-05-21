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
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search);
      
        fetch(`https://kid-life-server.vercel.app/search?name=${encodeURIComponent(search)}`)
          .then((res) => res.json())
          .then((data) => {
            setToys(data)
            form.reset()
        });
      };


    return (
        <div className='mt-28 mb-28'>
            <div className='w-1/3 mb-20 mx-auto'>
            <form onSubmit={handleSearch}>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" name='search' placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </form>
            </div>
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