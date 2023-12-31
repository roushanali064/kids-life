import React, { useContext } from 'react';
import { AuthContext } from '../pages/Shared/Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return(
            <div>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    if(user){
        return children
    }
    if(!user){
        Swal.fire({
            title: 'At First Login Or Register Your Account',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
             
            }
          })
        return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
    }
};

export default PrivateRoutes;