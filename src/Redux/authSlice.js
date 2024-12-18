import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLandlord } from './landlordSlice';
import { jwtDecode } from 'jwt-decode'; // Correct import for jwt-decode
import { baseUrl } from '../const/url.const';

// Async thunk for logging in
export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    const token = data.token;
    dispatch(setLandlord(data.user));
    return {
      token,
      user: data.user,
    };

  } catch (error) {
    return rejectWithValue(error.message);
  }
});


const initialState = {
  isAuthenticatedLandlord: !!localStorage.getItem('authToken'), // Initialize based on localStorage
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticatedLandlord = false;
      localStorage.removeItem('authToken');
    },
    setUserFromToken: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticatedLandlord = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem('authToken', action.payload.token); // Store token in local storage
        state.isAuthenticatedLandlord = true;
        state.user = action.payload.user; // Set user from action payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Add a check for token on page load and populate the state
export const checkUserToken = () => (dispatch) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    try {
      const decodedToken = jwtDecode(token);  // Use the correct jwtDecode function
      dispatch(setLandlord(decodedToken)); // Populate user data using decoded token
      dispatch(setUserFromToken({
        user: {
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
          landlordDetails: decodedToken.landlordDetails,
        }
      }));
    } catch (error) {
      console.error('Token decoding failed:', error);
    }
  }
};

export const { logout, setUserFromToken } = authSlice.actions;
export default authSlice.reducer;
