import { NextLetter, robotReducer } from '../store/robot/reducer'
import * as types from '../store/robot/types'


describe("Robot reducer", () => {

    const initialState: types.RobotState = {
        isOn: true,
        currentLetter: 'B'
    }

    test("Stop robot", () => {
        const expectedState: types.RobotState = {
            isOn: false,
            currentLetter: 'B'
        }
        const action = {
            type: types.RobotActionTypes.STOP_ROBOT
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test("Start robot", () => {
        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'A'
        }
        const action = {
            type: types.RobotActionTypes.START_ROBOT
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test("Invalid action", () => {
        const action = {
            type: "INVALIDACTION"
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(initialState)
    })

    test("Next Letter - Proceeds to next letter in alphabet", () => {
        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'D'
        }
        const action = {
            type: types.RobotActionTypes.NEXT_LETTER,
            payload: {
                currentLetter: 'C'
            }
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test("Next Letter - Returns to 'A' once we reach 'Z'", () => {

        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'A'
        }
        const action = {
            type: types.RobotActionTypes.NEXT_LETTER,
            payload: {
                currentLetter: 'Z'
            }
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })
})