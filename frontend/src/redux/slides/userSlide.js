import { createSlice } from '@reduxjs/toolkit'

export const userSlide = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    access_token: ''
  },
  reducers: {
    updateUser: (state, action) => {
      const { name, email, access_token } = action.payload
      console.log('action', action)
    },
  }
})

export const { updateUser } = userSlide.actions

export default userSlide.reducer