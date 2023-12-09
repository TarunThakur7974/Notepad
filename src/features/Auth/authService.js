import axios from "axios";

let Register = async (formdata) => {
  let responce = await axios.post("https://github.com/TarunThakur7974/Notepad-Backend/user/signup", formdata);
  return responce.data;
};

let Login = async (formdata) => {
  let responce = await axios.post("https://github.com/TarunThakur7974/Notepad-Backend/user/login", formdata);
  return responce.data;
};

let getUserData = async (formdata) => {
  if (formdata) {
    let responce = await axios.get("https://github.com/TarunThakur7974/Notepad-Backend/notes/" + formdata);
    return responce.data;
  }
};
let createData = async (formdata) => {
  if (formdata) {
    const { userId, title, description } = formdata
    let responce = await axios.post("https://github.com/TarunThakur7974/Notepad-Backend/notes/" + userId, { title, description });
    return responce.data;
  }
};
let deleteData = async (formdata) => {
  if (formdata) {
    let responce = await axios.delete("https://render.com/docs/node-version/notes/" + formdata);
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
