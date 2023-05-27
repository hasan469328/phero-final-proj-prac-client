import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const {createUser, updateUserProfile,logOut} = useContext(AuthContext)
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
      const newUser = result.user;
      updateUserProfile(data.name, data.photo)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      logOut()
      .then(()=>{
        reset()
        navigate('/')
      })
      console.log(newUser)
    })
  };
  return (
    <>
    <Helmet>
      <title>Bistro Boss | Register</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* image div */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">SignUp please!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          {/* form div */}
          <div className="card lg:w-1/2 shadow-2xl bg-base-100 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
                {errors.photo && <span>Photo url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 7,
                    maxLength: 10,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>Password must be 6 character or long</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p>Password must be less than 10 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p>
                    Password must have one uppercase, one lower case, one number
                    and one special character
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-outline bg-[#D1A054] hover:bg-[#eb920c] border-0"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p>
              Already have an account
              <Link className="text-indigo-600" to="/login">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
