import { Store, createStore, combineReducers, applyMiddleware } from 'redux'
import { robotReducer } from './robot/reducer'
import { RobotState } from './robot/types'
import { offlineRobot } from './robot/middlewares/offlineRobotError'

export interface ApplicationState {
    robot: RobotState
}

export const createRootReducer = combineReducers(
    {
        robot: robotReducer,
    }
)

const middlewares = applyMiddleware(offlineRobot)

export default function configureStore(): Store<ApplicationState> {
    const store = createStore(
        createRootReducer,
        middlewares
    )
    return store
}

export const store = configureStore()
