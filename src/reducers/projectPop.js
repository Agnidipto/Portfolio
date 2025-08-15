import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : true
}

const projectPop = createSlice({
  name: 'projectPop',
  initialState,
  reducers : {
    projectPopped : (state) => {
      return {value: false}
    }
  }
})

export const {projectPopped} = projectPop.actions

export default projectPop.reducer