export const searchUsers = (data, input) => {
  let status = input;
  if(input.toLowerCase() === 'ativo') {
    status = true;
  }
  if(input.toLowerCase() ==='inativo') {
    status = false;
  }
  let result = [];
  result = [...result, ...(data.filter((user) => user.name.toLowerCase().includes(input.toLowerCase())))]
  result = [...result, ...data.filter((user) => user.lastName.toLowerCase().includes(input.toLowerCase()))];
  result = [...result, ...data.filter((user) => user.email.toLowerCase().includes(input.toLowerCase()))];
  result = [...result, ...data.filter((user) => user.phone.toLowerCase().includes(input.toLowerCase()))];
  result = [...result, ...data.filter((user) => user.status === status)]
  const makeUnique = (result) =>  Array.from(new Set(result)); 
  const unique = makeUnique(result);
  console.log(unique);
  return unique;
};