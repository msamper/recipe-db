import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common['Authorization'] = token;
    console.log('auth set to every req');
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};
export default setAuthToken;
