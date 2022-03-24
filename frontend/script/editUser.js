import { redirectToRegister } from "./redirectToRegister.js";
import { responseCard } from "./responseCard.js";
import { basicAuth } from "./basicAuth.js";
import { getById } from "./registerForm.js";

const changeUser = async (form, id) => {

  const formData = new FormData(form);
  let object = {};
  formData.forEach((value, key) => {
    if (key === 'phone') {
      object[key] = value.replace(/\D/g, '');
    } else {
      object[key] = value;
    }
  });
  if (object.status) {
    object.status = true;
  };
  delete object.checkPassword;
  console.log(object.password);
  if (!object.password) {
    delete object.password;
  }  
  const json = JSON.stringify(object);
  const { Authorization } = basicAuth();
  const request = await fetch(`https://localhost:7271/users/${id}`, {
    method: "PUT",
    body: json,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization
    }
  });
  const response = await request.json();
  responseCard(response);
  const user = await getById(id);
  if (user.email !== object.email || (object.password && user.password !== object.password)) {
    location.assign('login.html');
    localStorage.clear();
  }
}

const editUser = (ev) => {
  const id = ev.target.id;
  const edit = ev.target.getAttribute('data-name');
  redirectToRegister(id, edit);
}

export { editUser, changeUser };