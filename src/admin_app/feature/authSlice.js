import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {
    set: (state, payload) => {
      state.user = payload.payload;
    }
  },
})

export const { set } = authSlice.actions

export default authSlice.reducer