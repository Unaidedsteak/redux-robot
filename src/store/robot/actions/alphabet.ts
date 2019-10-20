import { RobotActionTypes } from '../types'

export interface NextLetterAction { type: RobotActionTypes.NEXT_LETTER, payload: { currentLetter: string } }

export function NextLetter(currentLetter: string): NextLetterAction {
    return {
        type: RobotActionTypes.NEXT_LETTER,
        payload: {
            currentLetter
        }
    }
}
