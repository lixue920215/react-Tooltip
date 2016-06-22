import { SHOW_TOOLTIP, HIDE_TOOLTIP } from '../constants/actionType'

//action
export function showTooltip(newstate){
    return {
        type: SHOW_TOOLTIP,
		newstate
    }
}
export function hideTooltip(){
    return {
        type: HIDE_TOOLTIP
    }
}