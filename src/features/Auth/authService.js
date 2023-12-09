import axios from "axios";

let Register = async (formdata) => {
  let responce = await axios.post("http://localhost:500/user/signup", formdata);
  return responce.data;
};

let Login = async (formdata) => {
  let responce = await axios.post("http://localhost:500/user/login", formdata);
  return responce.data;
};

let getUserData = async (formdata) => {
  if (formdata) {
    let responce = await axios.get("http://localhost:500/notes/" + formdata);
    return responce.data;
  }
};
let createData = async (formdata) => {
  if (formdata) {
    const { userId, title, description } = formdata
    let responce = await axios.post("http://localhost:500/notes/" + userId, { title, description });
    return responce.data;
  }
};
let deleteData = async (formdata) => {
  if (formdata) {
    let responce = await axios.delete("http://localhost:500/notes/" + formdata);
    return responce.data;
  }
};

let services = {
  Register,
  Login,
  getUserData,
  createData,
  deleteData
};

export default services;
