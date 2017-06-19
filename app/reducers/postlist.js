import { POSTLIST } from '../actions/postlist'

const initialState = {}

function postlist (state = initialState, action) {
    switch (action.type) {
        case POSTLIST:
            return {
            	...state,
            	...action
            }
        default:
            return state
    }
}

export default postlist;