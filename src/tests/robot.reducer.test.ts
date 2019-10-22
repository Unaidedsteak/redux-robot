import { robotReducer } from '../store/robot/reducer'
import * as types from '../store/robot/types'


describe("Robot reducer", () => {

    const initialState: types.RobotState = {
        isOn: true,
        currentLetter: 'B',
        messageToSay: '',
        isIterating: false,
        iterateInterval: 2500
    }

    test("Stop robot", () => {
        const expectedState: types.RobotState = {
            isOn: false,
            currentLetter: 'B',
            messageToSay: '',
            isIterating: false,
            iterateInterval: 2500
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
            messageToSay: '',
            isIterating: false,
            iterateInterval: 2500
        }

        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'A',
            messageToSay: '',
            isIterating: false,
            iterateInterval: 2500
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
            messageToSay: '',
            isIterating: false,
            iterateInterval: 2500
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


    test("Start Iterator", () => {
        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'B',
            messageToSay: '',
            isIterating: true,
            iterateInterval: 101
        }
        const action = {
            type: types.RobotActionTypes.START_ITERATOR,
            payload: {
                iterateInterval: 101
            }
        }

        const newState = robotReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test("Stop Iterator", () => {
        const expectedState: types.RobotState = {
            isOn: true,
            currentLetter: 'B',
            messageToSay: '',
            isIterating: false,
            iterateInterval: 2500
        }
        const action = {
            type: types.RobotActionTypes.STOP_ITERATOR,
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