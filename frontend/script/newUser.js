import { basicAuth } from "./basicAuth.js";
import { responseCard } from "./responseCard.js";

export const newUser = async (form) => {

  const formData = new FormData(form);
  let object = {};
  formData.forEach((value, key) => {
    if (key === 'phone') {
      object[key] = value.replace(/\D/g, '');
    } else {
      object[key] = value
    }
  });
  if (object.status) {
    object.status = true;
  };
  delete object.checkPassword;
  const { Authorization } = basicAuth();
  const json = JSON.stringify(object);
  const request = await fetch("https://localhost:7271/users", {
    method: "POST",
    body: json,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization
    }
  });
  const response = await request.json();
  responseCard(response);
};
