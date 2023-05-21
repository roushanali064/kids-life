import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Shared/Provider/AuthProvider/AuthProvider';
import MyToysTable from './MyToysTable';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToy = () => {
    useTitle('My Toy')
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const url = `https://kid-life-server.vercel.app/toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])
    const handleDelate = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't To Delate This",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kid-life-server.vercel.app/toys/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if (data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = toys.filter(toy=>toy._id !== id)
                          setToys(remaining)
                          
                    }
                })
              
            }
          })
    }
    console.log(toys)
    return (
        <div className='mt-28 mb-28'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToysTable
                                key={toy._id}
                                toy={toy}
                                handleDelate={handleDelate}
                            ></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;