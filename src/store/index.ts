import { Store, createStore, combineReducers, applyMiddleware } from 'redux'
import { robotReducer } from './robot/reducer'
import { RobotState } from './robot/types'
import { OfflineRobot, Speak } from './robot/middleware'

export interface ApplicationState {
    robot: RobotState
}

export const createRootReducer = combineReducers(
    {
        robot: robotReducer,
    }
)

const middlewares = applyMiddleware(OfflineRobot, Speak)

export default function configureStore(): Store<ApplicationState> {
    const store = createStore(
        createRootReducer,
        middlewares
    )
    return store
}

export const store = configureStore()
