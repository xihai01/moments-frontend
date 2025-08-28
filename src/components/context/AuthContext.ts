import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import routeRequest from '../../authBase/routeRequest';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'verify':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
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

const verify = (dispatch) => async (phoneNumber: string, code: string) => {
  const data = await routeRequest('/api/auth/verify', { phoneNumber, code }); // Sign-in first

  if (data) {
    const { accessToken, refreshToken } = data;
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);

      console.log(
        'Access token and refresh token stored in AsyncStorage',
        accessToken,
        refreshToken
      );

      dispatch({
        type: 'verify',
        payload: { accessToken, refreshToken },
      });
    } catch (storageError) {
      console.error('Error storing access/refresh token in AsyncStorage:', storageError);
    }
  } else {
    console.error('Verification failed, not storing data.');
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
  { verify, signout, updateUser, tryLocalSignin },
  { isSignedIn: false, accessToken: null, refreshToken: null }
);
