import { createStore, combineReducers } from 'redux'
import Reducer from './reducers/reducer'

const Reducers = combineReducers({
    loguin: Reducer
})

const storeConfig = () => {
    return createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
}

export default storeConfig