import { RobotActionTypes } from '../types'

export interface SayMessageAction { type: RobotActionTypes.SAY_MESSAGE, payload: { messageToSay: string } }

export function SayMessage(messageToSay: string): SayMessageAction {
    return {
        type: RobotActionTypes.SAY_MESSAGE,
        payload: {
            messageToSay
        }
    }
}
