import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define a type for the slice state
export interface ModelState {
    availableModels: string[],
    selectedModel: string
}

const initialModelState: ModelState = {availableModels: [''], selectedModel: ''}

export const modelSlice = createSlice({
    name: 'model',
    initialState: initialModelState,
    reducers: {
        setModel(state, action: PayloadAction<string>) {
            state.selectedModel = action.payload
        },
        setAvailableModels(state, action: PayloadAction<string[]>) {
            state.availableModels = action.payload
            if (state.selectedModel === '') {
                state.selectedModel = action.payload[0]
            }
        }
    }
})