import {SHOW_TOOLTIP, HIDE_TOOLTIP} from '../constants/actionType'

//初始状态
const initState = {
    visible : false,
	dir		: '',
	text    : '',
	left    : '',
	top     : '',
	width   : '',
	height  : ''
}

export default function tooltip(state = initState, action) {
 	switch (action.type)   {
		case 'SHOW_TOOLTIP':
			return Object.assign({}, state, action.newstate)
		case 'HIDE_TOOLTIP':
			return initState;
		default :
			return state;
	}
}