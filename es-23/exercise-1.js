const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const pair = Object.keys(person);

for (let key of pair) {
  console.log(`${key}:${person[key]}`);
}

// Print values of person using Object.keys
