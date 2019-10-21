import { RobotActionTypes } from '../types'

export interface StartIterateAction { type: RobotActionTypes.START_ITERATOR, payload: { iterateInterval: number } }
export interface StopIterateAction { type: RobotActionTypes.STOP_ITERATOR }


export function StartIterator(interval?: number): StartIterateAction {
    return {
        type: RobotActionTypes.START_ITERATOR,
        payload: {
            iterateInterval: interval ? interval : 700 // Option to override the default interval
        }
    }
}

export function StopIterator(): StopIterateAction {
    return {
        type: RobotActionTypes.STOP_ITERATOR
    }
}
