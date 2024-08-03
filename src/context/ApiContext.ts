import axios from 'axios';

const ApiContext = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

ApiContext.interceptors.request.use(async config => {
  const ipResponse = await axios.get('https://ipecho.io/my');

  config.headers['X-browser'] = navigator.userAgent;
  config.headers['X-PublicIP'] = ipResponse.data.ip;
  config.headers['X-wifi'] = ipResponse.data.ip;
  config.headers['X-Latitude'] = ipResponse.data.latitude;
  config.headers['X-Longitude'] = ipResponse.data.longitude;
  config.headers['X-CountryID'] = 'ID';
  config.headers['X-Isp'] = ipResponse.data.isp;

  config.headers['apikey'] = import.meta.env.VITE_API_KEY

  //add header content type
  config.headers['Content-Type'] = 'application/json';

  //add token to header
  let token = localStorage.getItem(import.meta.env.VITE_APP_KEY + '_token');
  if (token) {
    config.headers[' Authorization '] = 'Bearer ' + token;
  }

  return config;
}, error => {
  // Menangani error sebelum request dikirim
  return Promise.reject(error);
});

export default ApiContext;