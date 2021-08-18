import axios from "axios";

export const requestsAPI = {
  testPost(isChecked: boolean) {
    return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {
      success: isChecked,
    });
  },
};
