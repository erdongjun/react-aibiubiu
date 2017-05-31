import { HOT } from '../actions/hot'

const initialState = {}

function hot (state = initialState, action) {
    switch (action.type) {
        case HOT:
            return {
            	...state,
            	...action
            }
        default:
            return state
    }
}

export default hot;