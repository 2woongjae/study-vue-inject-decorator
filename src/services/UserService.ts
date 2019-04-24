import axios from "axios";

export default class UserService {
  async getUsers() {
    try {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
