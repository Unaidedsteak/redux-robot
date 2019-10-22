import say from 'say'
import { Middleware } from 'redux'
import { selectIsRobotOn, selectCurrentLetter } from './selectors'
import { store } from '../index'
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

let intervalHolder: number = 0
function autoIterate(interval: number) {
    intervalHolder = <any>setInterval(()=> {
        const state = store.getState()
        store.dispatch(robotActions.NextLetter(selectCurrentLetter(state)))
    }, interval)
}


export const AutoIterate: Middleware = store => next => action => {
    switch (action.type) {
        case RobotActionTypes.START_ITERATOR:
            autoIterate(action.payload.iterateInterval)
            return next(action)

        case RobotActionTypes.STOP_ITERATOR:
            clearInterval(intervalHolder)
            return next(action)
            
        default:
            return next(action)
    }
}


export const Speak: Middleware = store => next => action => {

    switch (action.type) {
        case RobotActionTypes.START_ROBOT:
            // Purposely misspelled redux to make the speech synthesis sound better :)
            const aliveMessage = "Greetings! I'm the reduxxx robot!"
            speechSynthesizer(aliveMessage)
            return next(action)

        case RobotActionTypes.STOP_ROBOT:
            store.dispatch(robotActions.StopIterator())
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
