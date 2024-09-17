import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from './AuthApi';

// Initial state for the form
const initialState = {
  profileImage: null,
  username: '',
  email: '',
  mobileNumber: '',
  gender: '',
  role: 'admin', // Default to 'admin'
  password: '',
  confirmPassword: '',
  loading: false,
  error: '',
};

// Reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_LOADING':
      return { ...state, loading: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch({ type: 'SET_FIELD', field: 'profileImage', value: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', value: true });
    dispatch({ type: 'SET_ERROR', value: '' });

    // Simulate an API call
    setTimeout(() => {
      if (state.email === 'test@example.com') {
        dispatch({ type: 'SET_ERROR', value: 'Email already exists' });
      } else {
        // Pass the data to the register function
        register({
          username: state.username,
          email: state.email,
          password: state.password,
          mobileNumber: state.mobileNumber,
          gender: state.gender,
          profileImage: state.profileImage,
          role: state.role,
        });
        alert('Registration successful!');
        dispatch({ type: 'RESET' }); // Reset form state after successful registration
      }
      dispatch({ type: 'SET_LOADING', value: false });
    }, 2000);

    navigate('/login');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4'>
      <div className='w-full max-w-2xl p-6 bg-white rounded-lg shadow-md'> {/* Increased width */}
        <h2 className='text-2xl font-bold text-center text-teal-950 mb-6'>
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          {state.error && (
            <div className='text-red-600 text-sm mb-4'>{state.error}</div>
          )}

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Profile Image
            </label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              required
            />
            {state.profileImage && (
              <img
                src={state.profileImage}
                alt='Profile Preview'
                className='mt-2 w-24 h-24 rounded-full object-cover'
              />
            )}
          </div>

          {/* Responsive Grid Layout for Username and Mobile Number */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'> 
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Username
              </label>
              <input
                type='text'
                value={state.username}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'username', value: e.target.value })}
                className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
                placeholder='Enter your username'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone Number
              </label>
              <input
                type='tel'
                value={state.mobileNumber}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'mobileNumber', value: e.target.value })}
                className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
                placeholder='Enter your phone number'
                required
              />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              value={state.email}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Enter your email'
              required
            />
          </div>

          {/* Responsive Grid Layout for Gender and Role */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'> 
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Gender
              </label>
              <select
                value={state.gender}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'gender', value: e.target.value })}
                className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
                required
              >
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Role
              </label>
              <select
                value={state.role}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'role', value: e.target.value })}
                className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              >
                <option value='student'>Student</option>
                <option value='instructor'>Instructor</option>
                <option value='admin'>Admin</option> {/* Third option */}
              </select>
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              value={state.password}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Enter your password'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              value={state.confirmPassword}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'confirmPassword', value: e.target.value })}
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Confirm your password'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none'
            disabled={state.loading}
          >
            {state.loading ? 'Creating...' : 'Create Account'}
          </button>

          <div className='mt-4 text-center'>
            <Link to='/login' className='text-teal-600 hover:underline'>
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
