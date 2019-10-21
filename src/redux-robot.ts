import inquirer from 'inquirer'
import chalk from 'chalk'
import { store } from './store/index'
import * as robotSelectors from './store/robot/selectors'
import * as robotActions from './store/robot/actions/index'

function MainMenuPrompt(): Promise<any> {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Which action would you like to perform',
            name: 'mainMenu',
            choices: [
                {
                    name: 'Turn Robot On/Off',
                    value: 'toggleRobot'
                },
                {
                    name: 'Print next letter',
                    value: 'nextLetter'
                },
                new inquirer.Separator(),
                {
                    name: 'Exit',
                    value: 'exit'
                }
            ]
        }
    ])
}

async function MainMenu(error?: string) {
    const state = store.getState()
    console.clear()
    console.log('Robot status: ', robotSelectors.selectIsRobotOn(state) ? chalk.green('ONLINE') : chalk.red('OFFLINE'))
    console.log('Current letter: ', chalk.blue(robotSelectors.selectCurrentLetter(state)))
    
    const action = await MainMenuPrompt()

    if (action.mainMenu === "toggleRobot") {
        const action = robotSelectors.selectIsRobotOn(state) ? robotActions.stopRobot() : robotActions.startRobot()
        store.dispatch(action)
        MainMenu()
    } else if (action.mainMenu === "nextLetter") {
        try {
            store.dispatch(robotActions.NextLetter(robotSelectors.selectCurrentLetter(state)))
            MainMenu()
        } catch (error) {
            console.log(error)
        }
        
    } else {
        process.exit(0)
    }
}

MainMenu()
