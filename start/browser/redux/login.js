import axios from 'axios';

const currentUser = 'SET_CURRENT_USER';

const current = user => ({ type: currentUser, currentUser : user });

export default function reducer (currentUser = {}, action) {
	switch(action.type) {

		case currentUser:
			return action.currentUser

		default: 
	      return currentUser;
	}
}

export const setCurrentUser = (email, password) => {
  return dispatch => {
  axios.post('/login', {
  	email: email,
  	password: password
  })
    .then(res => {
       	dispatch(current(res.data));
       })
    }

}
