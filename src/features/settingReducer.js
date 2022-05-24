import { createSlice } from '@reduxjs/toolkit'
import jsCookie from 'js-cookie'
export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        value: { color: jsCookie.get('color')!==undefined ? jsCookie.get('color') : "white" }
    },
    reducers: {
        setColor: (state, color) => {
            state.value.color = color.payload
            jsCookie.set('color', color.payload)
        },
    }
})

// Action creators are generated for each case reducer function
export const { setColor } = settingSlice.actions

export default settingSlice.reducer