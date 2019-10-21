import { RobotActionTypes } from '../types'

export interface StartRobotAction { type: RobotActionTypes.START_ROBOT, payload: { currentLetter: string }}
export interface StopRobotAction { type: RobotActionTypes.STOP_ROBOT }

export function startRobot(): StartRobotAction {
    return {
        type: RobotActionTypes.START_ROBOT,
        payload: {
            currentLetter: 'A'
        }
    }
}

export function stopRobot(): StopRobotAction {
    return {
        type: RobotActionTypes.STOP_ROBOT,
    }
}

export type Action = StartRobotAction | StopRobotAction
