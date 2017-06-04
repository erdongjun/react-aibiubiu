import { CIRCLE } from '../actions/circle'

const initialState = {}

function circle (state = initialState, action) {
    switch (action.type) {
        case CIRCLE:
            return {
            	...state,
            	...action
            }
        default:
            return state
    }
}

export default circle;