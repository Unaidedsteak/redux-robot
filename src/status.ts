import inquirer from 'inquirer'
import chalk from 'chalk'
import { ApplicationState } from './store/index'
import * as robotSelectors from './store/robot/selectors'

const ui = new inquirer.ui.BottomBar();

export function UpdateStatus(state: ApplicationState) {
    const message = `
    Robot status   :    ${robotSelectors.selectIsRobotOn(state) ? chalk.green('ONLINE') : chalk.red('OFFLINE')}
    Current letter :    ${chalk.blue(robotSelectors.selectCurrentLetter(state))}
    AutoIterate    :    ${robotSelectors.selectIsIterating(state) ? chalk.green('ONLINE') : chalk.red('OFFLINE')}
    `
    ui.updateBottomBar(message)
}