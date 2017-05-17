import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';  //redux 异步 action 中间件
import {createLogger} from 'redux-logger';

const logger = createLogger();




console.log(createLogger)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk ,logger),
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
        
    )
    return store
}