import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const id = useParams()
    const handleUpdate=(event)=>{
        event.preventDefault()
        const from = event.target;
        const prize = from.prize.value
        const quantity= from.quantity.value
        const details = from.details.value
        const updateDoc = {prize,quantity,details}
        console.log(updateDoc)
        fetch(`https://kid-life-server.vercel.app/update/${id.id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateDoc)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                Swal.fire(
                    'Update Done!',
                    'You clicked the button!',
                    'success'
                  )
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className='w-1/2 mx-auto grid grid-cols-2'>
                    <div className="form-control">
                        <label className="label">
                            Prize
                        </label>
                        <label className="input-group">
                            <input type="text" name='prize' placeholder="Prize" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Quantity
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            Details
                        </label>
                        <label className="input-group">
                            <textarea name='details' className="textarea textarea-bordered col-span-2" placeholder="details"></textarea>
                        </label>
                    </div>
                    <input className='btn btn-primary col-span-2' type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;