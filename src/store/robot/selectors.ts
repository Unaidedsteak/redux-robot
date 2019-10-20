import { ApplicationState } from '../index'

export const selectIsRobotOn = (state: ApplicationState) => { return state.robot.isOn }
export const selectCurrentLetter = (state: ApplicationState) => { return state.robot.currentLetter }