



const Register = () => {
    return (
        <div className="hero md:h-screen text-[#263A29] bg-[#F2E3DB]">
            <div className="hero-content flex-col-reverse md:flex-row justify-center">
                
                <img src="https://static.vecteezy.com/system/resources/previews/024/029/953/non_2x/rabbit-clipart-transparent-background-free-png.png" className="md:max-w-sm" />

                <div>
                <h1 className="text-5xl font-bold">Create an account!</h1>
                {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                <div className="card shrink-0 lg:w-full lg:max-w-sm  ">
                    <form className="lg:card-body ">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#263A29]">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input lg:max-w-96 input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#263A29]">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input lg:max-w-96 input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-[#263A29]">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-wide bg-[#41644A]"><span className="text-[#F2E3DB]">Login</span></button>
                        </div>
                    </form>
                </div>
            
                </div>
            </div>
        </div>
    );
};

export default Register;