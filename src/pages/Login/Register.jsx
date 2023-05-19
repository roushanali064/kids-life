import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Create An Account!</h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name='name'
                                    placeholder="Enter Your Name"
                                    required
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name='email'
                                    placeholder="example@gmail.
                                com"
                                    required
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name='password'
                                    placeholder="Enter Your password"
                                    required
                                    className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Conform Password</span>
                                </label>
                                <input type="password"
                                    name='conFormPassword'
                                    required
                                    placeholder="Conform Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FEBF00] border-none rounded-xl text-black font-bold text-xl hover:text-white r" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h2>Already Have An Account ? <Link className='text-orange-600' to='/login'>Login</Link></h2>
                        <div className="divider">OR</div>
                        <div className="grid h-20 text-3xl place-items-center"><button><FaGoogle></FaGoogle></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;