import axios from "axios";

const api = axios.create({
   baseURL: "https://security-todo-server.herokuapp.com/",
});

export default api;