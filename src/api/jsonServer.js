import axios from "axios";

export default axios.create({
  //URL changes every 8 hours--Check here first if getting
  //Server problems.
  baseURL: process.env.NGROK_DOMAIN,
});
