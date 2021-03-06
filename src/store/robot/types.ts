export interface RobotState {
    readonly isOn: boolean
    readonly currentLetter: string
    readonly messageToSay: string
    readonly isIterating: boolean
    readonly iterateInterval: number
}

export enum RobotActionTypes {
    START_ROBOT = 'START_ROBOT',
    STOP_ROBOT = 'STOP_ROBOT',
    NEXT_LETTER = 'NEXT_LETTER',
    SAY_MESSAGE = 'SAY_MESSAGE',
    START_ITERATOR = 'START_ITER',
    STOP_ITERATOR = 'STOP_ITER'
}
