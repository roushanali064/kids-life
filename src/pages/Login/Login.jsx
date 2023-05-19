import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider/AuthProvider";


const Login = () => {

    const { SignInWithEmail, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn=()=>{
        console.log('clicked')
        googleSignIn()
        .then(res=>{
            Swal.fire(
                'Log In Successfully!',
                'You clicked the button!',
                'success'
              )
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        
        console.log(email, password)
        SignInWithEmail(email,password)
        .then(res=>{
            const loggedUser = res.user;
            console.log(loggedUser)
            from.reset()
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body px-20">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name='email'
                                    placeholder="example@gmail.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name='password'
                                    placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <h3>New To Kids Life ? <Link
                            className='text-orange-600' to='/register'>Sign Up</Link></h3>
                        <div className="divider">OR</div>
                        <div className="grid h-20 text-3xl place-items-center">
                            <button onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;