import axios from 'axios';

const signUpUser = 'SIGNUP_NEW_USER';

const signUp = user => ({ type: signUpUser, currentUser : user})

export default function reducer (currentUser = {}, action) {
	switch(action.type) {

		case signUpUser:
			return action.currentUser

		default:
	      return currentUser;
	}
}

export const signUpNewUser = user => dispatch => {
  axios.post('/signup', user)
       .then(function(res) {
          dispatch(signUp(res.data));
        })
      .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
}