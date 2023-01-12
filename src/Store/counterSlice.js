import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state,action) => {
            const {inp1,inp2} = action.payload
            state.value = Number(inp1) + Number(inp2) 
        },
        decrement: (state,action) => {
            const {inp1,inp2} = action.payload
            state.value = Number(inp1) - Number(inp2) 
        },
        vurma: (state,action) => {
            const {inp1,inp2} = action.payload
            state.value = Number(inp1) * Number(inp2)
        },
        bolme: (state,action) => {
            const {inp1,inp2} = action.payload
            state.value = Number(inp1) / Number(inp2)
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, vurma, bolme, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer