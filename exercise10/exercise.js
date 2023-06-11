// const user = {
//   id: 1,
//   name: "John",
//   age: 25,
// };

let save = () => {
  const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  localStorage.setItem("user", JSON.stringify(user));
};

let stamp = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const user = JSON.parse(user);
    console.log(user);
  } else {
    console.log("utente non trovato");
  }
};
