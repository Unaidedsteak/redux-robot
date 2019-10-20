import { Reducer } from 'redux'
import { RobotState, RobotActionTypes } from './types'

export const initialState: RobotState = {
    isOn: false,
    currentLetter: 'A'
}

export function NextLetter (currentLetter: string): string {
    const currentCode = currentLetter.charCodeAt(0)
    if(currentCode >= 90) {
        return 'A'
    } else {
        return String.fromCharCode(currentCode +1)
    }
}

const reducer: Reducer<RobotState> = (state = initialState, action) => {
    switch (action.type) {
        case RobotActionTypes.STOP_ROBOT : {
            return {...state, isOn: false}
        }
        case RobotActionTypes.START_ROBOT : {
            return {...state, isOn: true, currentLetter: 'A'}
        }
        case RobotActionTypes.NEXT_LETTER : {
            const nextLetter = NextLetter(action.payload.currentLetter)
            return {...state, currentLetter: nextLetter}
        }

        default: {
            return state
        }
    }
}

export { reducer as robotReducer }
