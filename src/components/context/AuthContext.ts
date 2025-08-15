import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import routeRequest from '../../authBase/routeRequest';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { ...state, isSignedIn: true, api_token: action.payload.api_token, refresh_token: action.payload.refresh_token, user: action.payload.user };
    case 'signout':
      return { ...state, isSignedIn: false, api_token: null, refresh_token: null, user: null };
    case 'update_user':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const updateUser = (dispatch) => async (newUserData) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(newUserData));
    dispatch({ type: 'update_user', payload: newUserData });
  } catch (err) {
    console.error('Error updating user data:', err);
  }
};

const signin = (dispatch) => async (email, password) => {
  const data = await routeRequest('/api/v1/users/sign_in', { email, password }); // Sign-in first

  if (data) {
    const { api_token, refresh_token, user:{ id, display_name, email, refresh_token_expires_at, token_expires_at } } = data;
    try {
      await AsyncStorage.setItem('api_token', api_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      await AsyncStorage.setItem('user', JSON.stringify({ id, display_name, email, refresh_token_expires_at, token_expires_at }));

      console.log('User data stored in AsyncStorage' + ' Hello ' + display_name);

      dispatch({
        type: 'signin',
        payload: { api_token, refresh_token, user:{ id, display_name, email, refresh_token_expires_at, token_expires_at } },
      });
    } catch (storageError) {
      console.error('Error storing data in AsyncStorage:', storageError);
    }
  } else {
    console.error('Sign-in failed, not storing data');
  }
};

const signout = (dispatch) => async () => {
  try {
    const api_token = await AsyncStorage.getItem('api_token');
    const data = await routeRequest('/api/v1/users/sign_out', { api_token });
    await AsyncStorage.multiRemove(['api_token', 'refresh_token', 'user']);
    //to do: do something with the data
    dispatch({ type: 'signout' });
  } catch (err) {
    console.error('Error during signout:', err);
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const api_token = await AsyncStorage.getItem('api_token');
  const refresh_token = await AsyncStorage.getItem('refresh_token');

  const user = await AsyncStorage.getItem('user');

  console.log(api_token);
  console.log(refresh_token);
  console.log(user);

  if (api_token && refresh_token && user) {
    dispatch({ type: 'signin', payload: { api_token, refresh_token, user: JSON.parse(user) } });
  } else {
    dispatch({ type: 'signout' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, updateUser, tryLocalSignin },
  { isSignedIn: false, api_token: null, refresh_token: null, user: null }
);
