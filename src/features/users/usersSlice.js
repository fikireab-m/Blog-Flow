import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Fikireab Mekuriaw' },
    { id: '1', name: 'Kaleab Bayih' },
    { id: '2', name: 'Natnael Aklilu' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer