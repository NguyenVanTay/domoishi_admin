/** @format */

import axios from "axios";

const configAxios = () => {
  axios.interceptors.response.use(
    function (response) {
      if (response.data) {
        // return success
        if (response.data.status === 200 || response.data.status === 201) {
          return response;
        }
        // reject errors & warnings
        return Promise.reject(response);
      }

      // default fallback
      return Promise.reject(response);
    },
    function (error) {
      // if the server throws an error (404, 500 etc.)
      return Promise.reject(error);
    }
  );
};
export default configAxios;
