import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            All Toys Comming Soon
        </div>
    );
};

export default AllToys;