import say from 'say'
import { Middleware } from 'redux'
import { selectIsRobotOn } from './selectors'
import { ApplicationState } from '..'
import { RobotActionTypes } from './types'
import * as robotActions from './actions/index'

export const OfflineRobot: Middleware = store => next => action => {
    const state: ApplicationState = store.getState()
    if (selectIsRobotOn(state)) {
        return next(action)
    } else {
        if (action.type === RobotActionTypes.START_ROBOT) {
            return next(action)
        } else {
            throw new Error("Cannot perform action, robot is offline!")
        }
    }
}

function speechSynthesizer(messageToSay: string) {
    say.speak(messageToSay, '0.7')
}

export const Speak: Middleware = store => next => action => {

    switch (action.type) {
        case RobotActionTypes.START_ROBOT:
            // Purposely misspelled redux to make the speech synthesis sound better :)
            const aliveMessage = "Greetings! I'm the reduxxx robot!"
            speechSynthesizer(aliveMessage)
            return next(action)

        case RobotActionTypes.STOP_ROBOT:
            speechSynthesizer("Goodbye!")
            return next(action)

        case RobotActionTypes.SAY_MESSAGE:
            speechSynthesizer(action.payload.messageToSay)
            return next(action)

        case RobotActionTypes.NEXT_LETTER:
            store.dispatch(robotActions.SayMessage(action.payload.currentLetter))

        default:
            return next(action)
    }
}
