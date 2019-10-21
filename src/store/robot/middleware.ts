import { Middleware } from 'redux'
import { selectIsRobotOn } from './selectors'
import { ApplicationState } from '..'
import { RobotActionTypes } from './types'

import say from 'say'

export const OfflineRobot: Middleware = store => next => action =>  {
    const state: ApplicationState = store.getState()
    if(selectIsRobotOn(state)) {
        return next(action)
    } else {
        if(action.type === RobotActionTypes.START_ROBOT) {
            return next(action)
        } else {
            throw new Error("Cannot perform action, robot is offline!")
        }
    }
}

export function speechSynthesizer (messageToSay: string) {
    say.speak(messageToSay, '0.7')
}

export const Speak: Middleware = store => next => action => {
    if(action.type === RobotActionTypes.START_ROBOT) {
        // Purposely misspelled redux to make the speech synthesis sound better :)
        const aliveMessage = "Greetings! I'm the reduxxx robot!"
        speechSynthesizer(aliveMessage)
        return next(action)
    } else if (action.type === RobotActionTypes.SAY_MESSAGE) {
        speechSynthesizer(action.payload.messageToSay)
    }
}