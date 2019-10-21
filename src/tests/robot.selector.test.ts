import * as selector from '../store/robot/selectors'


describe("Robot selectors", () => {

    const exampleState = {
        robot: {
            isOn: true,
            currentLetter: 'A',
            messageToSay: '',
            isIterating: false,
            iterateInterval: 700
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

    test("Select IsIterating", () => {
        const selection = selector.selectIsIterating(exampleState)
        expect(selection).toEqual(false)
    })

    test("Select IterateInterval", () => {
        const selection = selector.selectIterateInterval(exampleState)
        expect(selection).toEqual(700)
    })
})