import { createSlice} from "@reduxjs/toolkit";




const initialState = {
    value: {
        medium: ""
    }
 
}


export const typeSlice = createSlice({
    name: "medium",
    initialState,
    reducers: {
        changeMedium: (state, action)=>{
            state.value = action.payload
        }
    }

})

export const {changeMedium} = typeSlice.actions

export default typeSlice.reducer