import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { profileApi } from './api/apiSlice';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(profileApi.middleware),
})

// setupListeners(store.dispatch)

export default store;
