import _ from 'lodash';
import {
	ADD_RESERV,
	EDIT_RESERV,
	DELETE_RESERV
} from '../const/actions.jsx';

const init = [];

export dafault function(reservs=init, action) {
	switch(action.type) {
		case ADD_RESERV: 
			return [
				...reservs,
				action.payload
			];
		case EDIT_RESERV:
			return reservs.map(reserv => {
				if (reserv.id === action.payload.id) {
					
				}
			})
	}
}