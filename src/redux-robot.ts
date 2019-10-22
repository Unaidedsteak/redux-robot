import inquirer from 'inquirer'
import { store } from './store/index'
import * as robotSelectors from './store/robot/selectors'
import * as robotActions from './store/robot/actions/index'
import * as statusBar from './status'

function MainMenuPrompt(): Promise<any> {
    statusBar.UpdateStatus(store.getState())
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Select and action:',
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
                {
                    name: 'Toggle AutoIterate',
                    value: 'toggleAutoIterate'
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

function AutoInterateIntervalPrompt(): Promise<any> {
    return inquirer.prompt([
        {
            type: 'number',
            message: 'Enter an iteration interval (Milliseconds):',
            default: 2500,
            name: 'autoIterateInterval',
        }
    ])
}

async function MainMenu() {
    console.clear()
    const action = await MainMenuPrompt()
    const state = store.getState()
    if (action.mainMenu === "toggleRobot") {
        const action = robotSelectors.selectIsRobotOn(state) ? robotActions.stopRobot() : robotActions.startRobot()
        store.dispatch(action)
        MainMenu()
    } else if (action.mainMenu === "nextLetter") {
        try {
            store.dispatch(robotActions.NextLetter(robotSelectors.selectCurrentLetter(state)))
            MainMenu()
        } catch (error) {

        }

    } else if (action.mainMenu === "toggleAutoIterate") {
        if (!robotSelectors.selectIsIterating(state)) {
            const result = await AutoInterateIntervalPrompt()
            try {
                store.dispatch(robotActions.StartIterator(result.autoIterateInterval))
                MainMenu()
            } catch (error) {
                console.log(error)
            }
        } else {
            store.dispatch(robotActions.StopIterator())
            MainMenu()
        }

    } else {
        process.exit(0)
    }
}

MainMenu()
