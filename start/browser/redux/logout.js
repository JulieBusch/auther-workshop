import axios from 'axios';

const logOutUser = 'LOGOUT_CURRENT_USER';

const logout = () => ({ type: logOutUser, currentUser : {} });

export default function reducer (currentUser = {}, action) {
	switch(action.type) {

		case logOutUser:
			return action.currentUser

		default:
	      return currentUser;
	}
}

export const logOutTheUser = () => {
  return dispatch => {
  axios.put('/logout')
    .then(res => {;
       	dispatch(logout());
       })
    }

}

