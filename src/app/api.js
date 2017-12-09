import axios from "axios";

export default {
  userTab: {
    showHomePage: item =>
      axios.post("/api/home", { item }).then(res => res.data.homeItem)
  }
};
