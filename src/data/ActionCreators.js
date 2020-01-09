import { ActionTypes } from './ActionTypes'


export const create = (username, fullname, phonenumber, email, paassword) => ({
	type: ActionTypes.CREATE_USER,
	payload: {
		username: username, 
		fullname: firstname, 
		phonenumber: phonenumber, 
		email: email, 
		paassword: paassword
	}
});

export const signin = (email, paassword) => ({
	type: ActionTypes.SIGNIN_USER,
	payload: {
		email : email, 
		paassword: paassword
	}
});

export const loadUsers = () => ({
	type: ActionTypes.GET_USERS,
})

export const getUser =(id) => ({
	type: ActionTypes.GET_USER,
	payload: {
		id: id
	}
}};

export const updateUser =(id) => ({
	type: ActionTypes.UPDATE_USER,
	payload: {
		id: id
	}
}};

export const remove =(id) => ({
	type: ActionTypes.DELETE_USER,
	payload: {
		id: id
	}
}};


export const loadFriends =() => ({
	type: ActionTypes.GET_FRIENDS,
	payload: {

	}
}};


export const loadFriends =() => ({
	type: ActionTypes.GET_FRIENDS,
	payload: {

	}
}};

export const getF =(id) => ({
	type: ActionTypes.GET_FRIEND,
	payload: {
		id: id
	}
}};

export const updateF =(id) => ({
	type: ActionTypes.UPDATE_FRIEND,
	payload: {
		id: id
	}
}};


export const locateF =(id) => ({
	type: ActionTypes.LOCATE_FRIEND,
	payload: {
		id: id
	}
}};

export const saveF =(id) => ({
	type: ActionTypes.SAVE_FRIEND,
	payload: {
		id: id
	}
}};


