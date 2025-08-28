import authApi from './auth';

// payload -> { phoneNumber: ..... }
const routeRequest = async (route, payload) => {
  try {
    if (route === '/api/auth/register') {
      const response = await authApi.post(route, payload);

      //console.log(response.headers.toJSON());
      console.log('/api/auth/register', response.data);

      return response.data;
    } else if (route === '/api/auth/verify') {
      const response = await authApi.post(route, payload);

      console.log('/api/auth/verify', response.data);

      return response.data;
    }
  } catch (err) {
    console.error('Error:', err.response);

    return '400';
  }
};

export default routeRequest;
