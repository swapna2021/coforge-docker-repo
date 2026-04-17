import axios from "axios";

const api=axios.create({
   baseURL: "https://silver-train-rxrvjjrjjvrhgqq-8082.app.github.dev/students"
})
export default api