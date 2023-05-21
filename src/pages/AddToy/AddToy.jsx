import React, { useContext } from 'react';
import { AuthContext } from '../Shared/Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    useTitle('AddToy')
    const { user } = useContext(AuthContext)
    const handleAddToy = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const sellerEmail = from.email.value;
        const imageUrl = from.url.value;
        const sellerName = from.product.value;
        const subCategory = from.category.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const availableQuantity = from.quantity.value;
        const description = from.details.value;
        
        const toy = {availableQuantity,description,imageUrl,name,price,rating,sellerEmail,subCategory,sellerName}
        console.log(toy)

        fetch('https://kid-life-server.vercel.app/product',{
            method: 'POST',
            headers: {
                'content-Type':'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                Swal.fire(
                    'Toy Add Done!',
                    'You clicked the button!',
                    'success'
                  )
            }
        })
    }
    return (
        <div className='mb-28'>
            <h2 className='mb-20 text-4xl font-bold text-center text-[#E0035D]'>Add A Toy</h2>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 md:grid-cols-2 w-1/2 mx-auto gap-5'>
                    <div>
                        <label className='block text-xl' htmlFor="name">Name</label>
                        <input defaultValue={user?.displayName} type="text" id='name' name='name' placeholder="name" className="input input-bordered input-secondary w-full max-w-xs" required />
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="url">Picture Url</label>
                        <input type="text" name='url' placeholder="Picture Url" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="product">Product Name</label>
                        <input type="text" name='product' placeholder="Product Name" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="email">Seller Email</label>
                        <input defaultValue={user?.email} type="email" name='email' placeholder="exampli@kidslife.com" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="category">Category</label>
                        <input type="text" name='category' placeholder="category" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="price">Price</label>
                        <input type="text" name='price' placeholder="$ Price" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="rating">Rating</label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className='block text-xl' htmlFor="name">Quantity</label>
                        <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered input-secondary w-full max-w-xs" required/>
                    </div>
                    <textarea name='details' className="textarea col-span-2 h-24 textarea-secondary" placeholder="Product details"></textarea>
                <input className='col-span-2 text-xl font-bold  btn btn-primary' type="submit" value="Add Toy" required/>
                </div>
            </form>

        </div>
    );
};

export default AddToy;