import {get_register_success, get_register_fail} from './action'
import {initState} from '../../../utils/asyncActionHandle'

export function registerAction(state = initState, action) {
    switch(action.type) {
        case get_register_success:
            return {
                ...state,
                item: action.item
            }
        case get_register_fail:
            return {
                ...state
            }
        default:
            return state
    }
}
