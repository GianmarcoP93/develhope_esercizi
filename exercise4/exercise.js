const isLogged = true;

function exercise(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged == true) {
      resolve(Math.random());
    } else {
      reject(new Error("Not true!"));
    }
  });
}

function exerciseChaining(exercise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exercise > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("Not greater then 0.5"));
      }
    });
  }, 500);
}

exercise(isLogged)
  .then(exerciseChaining)
  .then((value) => console.log("l'utente loggato è:", value))
  .catch((err) => console.log(err));
