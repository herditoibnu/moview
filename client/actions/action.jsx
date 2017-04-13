import {
	ADD_RESERV,
	EDIT_RESERV,
	DELETE_RESERV
} from '../const/actions.jsx';

export function addReserv(id, name, date_start, date_end, user_id) {
	let payload = {
		id: id,
		name: name,
		date_start: date_start,
		date_end: date_end,
		user_id: user_id
	};

	return {
		type: ADD_RESERV,
		payload: payload
	};
};

export function editReserv(id, name, date_start, date_end, user_id) {
	let payload = {
		id: id,
		name: name,
		date_start: date_start,
		date_end: date_end,
		user_id: user_id
	};

	return {
		type: EDIT_RESERV,
		payload: payload
	};
};

export function deleteReserv(id) {
	return {
		type: DELETE_RESERV,
		payload: id
	};
};