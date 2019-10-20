export interface RobotState {
    readonly isOn: boolean
    readonly currentLetter: string
}

export enum RobotActionTypes {
    START_ROBOT = 'START_ROBOT',
    STOP_ROBOT = 'STOP_ROBOT',
    NEXT_LETTER = 'NEXT_LETTER'
}
