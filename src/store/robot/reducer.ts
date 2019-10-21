import { Reducer } from 'redux'
import { RobotState, RobotActionTypes } from './types'

export const initialState: RobotState = {
    isOn: false,
    currentLetter: 'A',
    messageToSay: ''
}

const reducer: Reducer<RobotState> = (state = initialState, action) => {
    switch (action.type) {
        case RobotActionTypes.STOP_ROBOT : {
            return {...state, isOn: false}
        }
        case RobotActionTypes.START_ROBOT : {
            return {...state, isOn: true, currentLetter: 'A' }
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
