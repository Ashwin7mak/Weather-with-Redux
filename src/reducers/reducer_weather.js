import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	// console.log('action received', action);
	switch (action.type) {
		case FETCH_WEATHER:
			// inserting data into state array
			return [ action.payload.data, ...state ];
	}

	return state;
}