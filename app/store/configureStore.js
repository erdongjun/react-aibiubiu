import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';  //redux 异步 action 中间件


console.log(applyMiddleware,thunk)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,applyMiddleware(thunk),
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
        
    )
    return store
}