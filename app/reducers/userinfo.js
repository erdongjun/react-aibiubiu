import { USERINFO } from '../constants/userinfo'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case USERINFO:
            return {
            	...state,
            	...action
            }
        default:
            return state
    }
}