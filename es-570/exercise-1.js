// Class definition

class Person {
  constructor(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
  }
}
const developer = new Person("Mario", "Rossi");
console.log(developer.firstName + " " + developer.lastName);
