// import axios from "axios";

// let Register = async (formdata) => {
//   let responce = await axios.post("https://notepad-kjwv.onrender.com/user/signup", formdata);
//   return responce.data;
// };

// let Login = async (formdata) => {
//   let responce = await axios.post("https://notepad-kjwv.onrender.com/user/login", formdata);
//   return responce.data;
// };

// let getUserData = async (formdata) => {
//   if (formdata) {
//     let responce = await axios.get("https://notepad-kjwv.onrender.com/notes/" + formdata);
//     return responce.data;
//   }
// };
// let createData = async (formdata) => {
//   if (formdata) {
//     const { userId, title, description } = formdata
//     let responce = await axios.post("https://notepad-kjwv.onrender.com/notes/" + userId, { title, description });
//     return responce.data;
//   }
// };
// let deleteData = async (formdata) => {
//   if (formdata) {
//     let responce = await axios.delete("https://notepad-kjwv.onrender.com/notes/" + formdata);
//     return responce.data;
//   }
// };
// let updateData = async (formdata) => {
//   if (formdata) {
//     const { userId, title, description } = formdata
//     let responce = await axios.put("https://notepad-kjwv.onrender.com/notes/" + userId, { title, description });
//     return responce.data;
//   }
// };
// let services = {
//   Register,
//   Login,
//   getUserData,
//   createData,
//   updateData,
//   deleteData
// };

// export default services;
import axios from "axios";

let Register = async (formdata) => {
  let responce = await axios.post("http://localhost:5000/user/signup", formdata);
  return responce.data;
};

let Login = async (formdata) => {
  let responce = await axios.post("http://localhost:5000/user/login", formdata);
  return responce.data;
};

let getUserData = async (formdata) => {
  if (formdata) {
    let responce = await axios.get("http://localhost:5000/notes/" + formdata);
    return responce.data;
  }
};
let createData = async (formdata) => {
  if (formdata) {
    const { userId, title, description } = formdata
    let responce = await axios.post("http://localhost:5000/notes/" + userId, { title, description });
    return responce.data;
  }
};
let deleteData = async (formdata) => {
  if (formdata) {
    let responce = await axios.delete("http://localhost:5000/notes/" + formdata);
    return responce.data;
  }
};
let updateData = async (formdata) => {
  if (formdata) {
    const { userId, title, description } = formdata
    let responce = await axios.put("http://localhost:5000/notes/" + userId, { title, description });
    return responce.data;
  }
};

let services = {
  Register,
  Login,
  getUserData,
  createData,
  deleteData,
  updateData
};

export default services;
