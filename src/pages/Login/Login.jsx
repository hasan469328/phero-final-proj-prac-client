import { useContext, useEffect, useRef, useState } from 'react';
import {loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha} from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const {signIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  useEffect(()=>{
   loadCaptchaEnginge(7) 
  },[])

  const handleCaptchaValidation = (e) => {
    const user_captcha_value = e.target.value;
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* image div */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        {/* form div */}
        <div className="card lg:w-1/2 shadow-2xl bg-base-100 p-4">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"><LoadCanvasTemplate></LoadCanvasTemplate></span>
              </label>
              <input
                onBlur={handleCaptchaValidation}
                type="text"
                name="captcha"
                placeholder="type captcha"
                className="input input-bordered"
              />
            </div>


            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-outline bg-[#D1A054] hover:bg-[#eb920c] border-0" type="submit" value="Login" />
            </div>
          </form>
          <p>Don&apos;t have an account<Link className='text-indigo-600' to="/register">Please Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
