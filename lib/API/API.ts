import axios from 'axios';

const API = () => {
  const ENDPOINT = 'http://localhost:3000/api/';
  return {
    post: async <Body>(url: string, body: Body, token?: string) => {
      return (
        await axios.post(ENDPOINT + url, body, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
      ).data;
    },
  };
};
export default API;
