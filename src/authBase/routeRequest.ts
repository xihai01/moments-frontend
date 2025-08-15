import authApi from './auth';

const routeRequest = async (route, payload) => {
  try {
    if (route === '/api/v1/users/sign_out') {
      const api_token = payload.api_token;
      authApi.defaults.headers.common['Authorization'] = `Bearer ${api_token}`;
      const response = await authApi.delete(route);

      //console.log(response.headers.toJSON());
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.data);

      return response.data;
    } else if (route === '/api/v1/users/sign_in') {
      const response = await authApi.post(route, payload);

      //console.log(response.headers.toJSON());
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.data);

      return response.data;
    }
  } catch (err) {
    console.error('Error:', err.response);

    return 'Request Error: Unable to retrieve response data.';
  }
};

export default routeRequest;
