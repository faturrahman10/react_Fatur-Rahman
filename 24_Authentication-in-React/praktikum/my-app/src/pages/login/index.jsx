import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
      .then((response) => {
        if (response?.data?.token) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully Login!',
            confirmButtonText: 'OK',
          }).then((res) => {
            if (res.isConfirmed) {
              Cookies.set('email', email);
              Cookies.set('token', response?.data?.token);
              navigate('/');
            }
          });
        }
        Cookies.set('email', email);
        Cookies.set('token', response?.data?.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className='flex justify-center items-center w-screen h-screen'>
      <form onSubmit={handleLogin} className='flex flex-col gap-y-3'>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-3 w-60 h-10 rounded-md bg-white border border-green-500 focus:outline-none'
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-3 w-60 h-10 rounded-md bg-white border border-green-500 focus:outline-none'
        />
        <div className='h-10 mt-10 w-60 bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold flex justify-center items-center'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
