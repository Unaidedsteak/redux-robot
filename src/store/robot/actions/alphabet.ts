import { RobotActionTypes } from '../types'

export interface NextLetterAction { type: RobotActionTypes.NEXT_LETTER, payload: { currentLetter: string } }

export function NextLetter(currentLetter: string): NextLetterAction {
    return {
        type: RobotActionTypes.NEXT_LETTER,
        payload: {
            currentLetter: generateNextLetter(currentLetter)
        }
    }
}

function generateNextLetter (currentLetter: string): string {
    const currentCode = currentLetter.charCodeAt(0)
    if(currentCode >= 90) {
        return 'A'
    } else {
        return String.fromCharCode(currentCode +1)
    }
}