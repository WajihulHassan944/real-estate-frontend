import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/authSlice';
import bg from '../assets/img/house21.jpg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Accessing authentication state
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Logging in...");
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((result) => {
        const token = result.token;
        const userType = result.user.type;
        toast.dismiss(); // Dismiss the loading toast
        toast.success("Login successful!");
        console.log('Token:', token);

        // Navigate based on user type
        if (userType === 'landlord') {
          navigate('/LandlordDashboard');
        } else if (userType === 'careprovider') {
          navigate('/careproviderdashboard');
        } else {
          toast.error('Unknown user type');
        }
      })
      .catch((err) => {
        toast.dismiss(); // Dismiss the loading toast
        toast.error(`Login failed: ${err}`);
        console.error('Login failed:', err);
      });
  };  
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

      {/* Login Form */}
      <div className="relative w-full max-w-sm bg-white shadow-md rounded-lg p-8 z-10">
        <h2 className="text-2xl font-semibold text-center text-[#2E86AB] mb-6">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-2 px-4 rounded-lg focus:outline-none mt-[30px]"
            style={{ backgroundColor: '#C64C7B' }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/register-landlord" className="text-[#154D7C] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
