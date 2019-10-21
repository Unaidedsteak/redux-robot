import { robotReducer } from '../store/robot/reducer'
import * as types from '../store/robot/types'


describe("Robot reducer", () => {

    const initialState: types.RobotState = {
        isOn: true,
        currentLetter: 'B',
        messageToSay: ''
    }

    test("Stop robot", () => {
        const expectedState: types.RobotState = {
            isOn: false,
            currentLetter: 'B',
            messageToSay: ''
        }
        const action = {
            type: types.RobotActionTypes.STOP_ROBOT
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test("Start robot", () => {

        const initialState: types.RobotState = {
            isOn: false,
            currentLetter: 'B',
            messageToSay: ''
        }

        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'A',
            messageToSay: ''
        }
        const action = {
            type: types.RobotActionTypes.START_ROBOT
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test("Next letter", () => {

        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'B',
            messageToSay: ''
        }
        const action = {
            type: types.RobotActionTypes.NEXT_LETTER,
            payload: {
                currentLetter: 'B'
            }
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

})