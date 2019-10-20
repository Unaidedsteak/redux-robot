import { Middleware } from 'redux'
import { selectIsRobotOn } from '../selectors'
import { ApplicationState } from '../..'
import { RobotActionTypes } from '../types'

export const offlineRobot: Middleware = store => next => action =>  {
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