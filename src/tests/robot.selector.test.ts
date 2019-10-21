import * as selector from '../store/robot/selectors'


describe("Robot selectors", () => {

    const exampleState = {
        robot: {
            isOn: true,
            currentLetter: 'A',
            messageToSay: ''
        }
    }

    test("Select IsRobotOn", () => {
        const selection = selector.selectIsRobotOn(exampleState)
        expect(selection).toEqual(true)
    })

    test("Select IsRobotOn", () => {
        const selection = selector.selectCurrentLetter(exampleState)
        expect(selection).toEqual('A')
    })
})