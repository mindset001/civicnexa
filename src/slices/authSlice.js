import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const api = 'http://127.0.0.1:8000'
const api = 'https://civicnexa.onrender.com'
// /auth/users/


const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken') : null


export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials={}, thunkAPI) => {
    try {
      const config ={
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post(`${api}/auth/jwt/create`, credentials, config);
      localStorage.setItem('userToken', data.access)
      // console.log("response", data.access)
      return data;
    } catch (error) {
      // console.log(error.response.data.detail)
      return thunkAPI.rejectWithValue(error.response.data.detail)
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials={}, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.post(`${api}/auth/users/`, credentials, config);
      const data = response.data
      console.log('data>>>>>>>>>>>>>>>',data)
      return data
    } catch (error) {
      console.log(error.response.data.username)
      return thunkAPI.rejectWithValue(error.response.data.username)
    }
  }
)
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    loading: false,
    userToken,
    success: false,
    error: null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.userToken = action.payload.userToken;
    },
    [loginUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [registerUser.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [registerUser.fulfilled]: (state, {payload}) => {
        state.loading = false;
        state.success = true;
    },
    [registerUser.rejected]: (state, {payload}) => {
        state.loading = false;
        state.error = payload;
    }
  }
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
