import { createSlice} from "@reduxjs/toolkit";




const initialState = {
    value: {
        medium: null
    }
 
}


export const typeSlice = createSlice({
    name: "medium",
    initialState,
    reducers: {
        changeMedium: (state, action)=>{
            state.value.medium = action.payload
            console.log("medium: ", action.payload)
        }
    }

})

export const {changeMedium} = typeSlice.actions

export default typeSlice.reducer