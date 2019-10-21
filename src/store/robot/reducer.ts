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
            return {...state, isOn: true, currentLetter: 'A', iterateInterval: 700 } // Extra values here to reset to default on start
        }
        case RobotActionTypes.NEXT_LETTER : {
            return {...state, currentLetter: action.payload.currentLetter}
        }

        default: {
            return state
        }
    }
}

export { reducer as robotReducer }
