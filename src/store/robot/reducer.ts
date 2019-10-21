import { Reducer } from 'redux'
import { RobotState, RobotActionTypes } from './types'

export const initialState: RobotState = {
    isOn: false,
    currentLetter: 'A',
    messageToSay: '',
    isIterating: false,
    iterateInterval: 700 // Milliseconds
}

const reducer: Reducer<RobotState> = (state = initialState, action) => {
    switch (action.type) {
        case RobotActionTypes.STOP_ROBOT : {
            return {...state, isOn: false}
        }
        case RobotActionTypes.START_ROBOT : {
            return {...state, isOn: true, currentLetter: initialState.currentLetter, iterateInterval: initialState.iterateInterval } // Extra values here to reset to default on start
        }
        case RobotActionTypes.NEXT_LETTER : {
            return {...state, currentLetter: action.payload.currentLetter}
        }

        case RobotActionTypes.START_ITERATOR : {
            return {...state, isIterating: true, iterateInterval: action.payload.iterateInterval}
        }

        case RobotActionTypes.STOP_ITERATOR : {
            return {...state, isIterating: false, iterateInterval: initialState.iterateInterval}
        }

        default: {
            return state
        }
    }
}

export { reducer as robotReducer }
