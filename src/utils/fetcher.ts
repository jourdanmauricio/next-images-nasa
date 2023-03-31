const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'KhFkJ2BxazPTsjib8YAMruO509x7sxNc5fJ8kjuG';

const fetcher = async (queryParams?: string) => {
  console.log('Fetch queryParams', queryParams);
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}${queryParams?.length ? queryParams : ''}`
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetcher;
