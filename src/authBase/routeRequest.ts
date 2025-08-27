import authApi from './auth';

// payload -> { phoneNumber: ..... }
const routeRequest = async (route, payload) => {
  try {
    if (route === '/api/auth/register') {
      const response = await authApi.post(route, payload);

      //console.log(response.headers.toJSON());
      console.log(response.data);

      return response.data;
    }
  } catch (err) {
    console.error('Error:', err.response);

    return '400';
  }
};

export default routeRequest;
