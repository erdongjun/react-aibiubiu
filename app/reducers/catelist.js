import { CATELIST } from '../actions/catelist'

const initialState = {}

function catelist (state = initialState, action) {
    switch (action.type) {
        case CATELIST:
            return {
            	...state,
            	...action
            }
        default:
            return state
    }
}

export default catelist;