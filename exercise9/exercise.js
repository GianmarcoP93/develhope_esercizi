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
