// const user = {
//   id: 1,
//   name: "John",
//   age: 25,
// };

const internalMemory = {
  save: (key, value) => {
    if (typeof key !== "string") throw new Error("key must be a valid string");
    if (value === undefined) throw new Error("value cannot be undefined");
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    if (typeof key !== "string") throw new Error("key must be a valid string");
    return JSON.parse(localStorage.getItem(key));
  },
  remove: (key) => {
    if (typeof key !== "string") throw new Error("key must be a valid string");
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

const user = {
  id: 1,
  name: "John",
  age: 25,
};

internalMemory.save("user", user);
