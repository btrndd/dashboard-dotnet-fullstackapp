
export const responseCard = (response) => {
  const main = document.querySelector('body');
  const container = document.createElement('div');
  const text = document.createElement('p');
  text.textContent = response.message;
  console.log(response);
  main.appendChild(container);
  container.appendChild(text);
  container.classList.add('request');
  const keys = Object.keys(response);
  if (keys[0] === 'data' && response.data !== null) {
    container.classList.add('good');
  } else if (response.message === 'O usuário foi removido com sucesso!') {
    container.classList.add('good');
  } else {
    container.classList.add('bad');
  }
}