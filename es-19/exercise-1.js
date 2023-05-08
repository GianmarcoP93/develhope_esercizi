const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

//person1 viene modificato perchè non stiamo copiando una copia dell'oggetto quando dichiriamo person2=person1 ma stiamo modindo l'oggetto già esistente
