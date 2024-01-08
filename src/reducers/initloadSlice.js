import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : true
}

const initloadSlice = createSlice({
  name : 'initload',
  initialState,
  reducers : {
    loadPage : (state) => {
      return {value : false}
    },
    unloadPage : (state) => {
      return {value : true}
    },
    changeLoad : (state, action) => {
      return { value : action.payload}
    }
  }
})

export const {loadPage, unloadPage, changeLoad} = initloadSlice.actions

export default initloadSlice.reducer