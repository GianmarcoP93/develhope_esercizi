const number = 15;

let promise = new Promise((resolve, reject) => {
  if (number >= 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

promise
  .then((number) =>
    console.log(`Corretto! Il numero ${number} è maggiore di 10`)
  )
  .catch((err) => console.log(`Sbagliato!${err} è minore di 10`));
