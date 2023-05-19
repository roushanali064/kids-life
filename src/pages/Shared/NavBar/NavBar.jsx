import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(res=>{
            Swal.fire(
                'Log Out Successful!',
                'You clicked the button!',
                'success'
              )
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const li = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link>My Toys</Link></li>
        <li><Link>Add A Toy</Link></li>
        <li><Link>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <Link>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {li}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <Link className="btn bg-[#FEBF00] border-none rounded text-black font-bold text-xl hover:text-white" onClick={handleLogOut}>Log Out</Link> : <Link className="btn bg-[#FEBF00] border-none rounded text-black font-bold text-xl hover:text-white" to='/login'>Login</Link>}
            </div>
        </div>
    );
};

export default NavBar;