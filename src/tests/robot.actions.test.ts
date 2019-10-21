import * as robotActions from '../store/robot/actions/index'
import * as types from '../store/robot/types'


describe("Robot actions", () => {

    test("[action] Stop robot", () => {
        const expectedAction = {
            type: types.RobotActionTypes.STOP_ROBOT
        }
        expect(robotActions.stopRobot()).toEqual(expectedAction)
    })

    test("[action] Start robot", () => {
        const expectedAction = {
            type: types.RobotActionTypes.START_ROBOT,
            payload: {
                currentLetter: 'A'
            }
        }
        expect(robotActions.startRobot()).toEqual(expectedAction)
    })

    test("[action] Next letter", () => {
        const currentLetter = 'A'
        const expectedAction = {
            type: types.RobotActionTypes.NEXT_LETTER,
            payload: {
                currentLetter: 'B'
            }
        }
        expect(robotActions.NextLetter(currentLetter)).toEqual(expectedAction)
    })

    test("[action] Next letter returns to A when currentLetteris Z", () => {
        const currentLetter = 'Z'
        const expectedAction = {
            type: types.RobotActionTypes.NEXT_LETTER,
            payload: {
                currentLetter: 'A'
            }
        }
        expect(robotActions.NextLetter(currentLetter)).toEqual(expectedAction)
    })

    test("[action] Say Message", () => {
        const message = 'Hello World!'
        const expectedAction = {
            type: types.RobotActionTypes.SAY_MESSAGE,
            payload: {
                messageToSay: message
            }
        }
        expect(robotActions.SayMessage(message)).toEqual(expectedAction)
    })

})