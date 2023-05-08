// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (true) {
    case role === "ceo":
      return "the ceo's salary is 2200";

    case role === "manager":
      return "the manager's salary is 1800";

    case role === "cto":
      return "the cto's salary is 1800";

    case role === "developer":
      return "the developer's salary is 1500";

    default:
      return "default salary is 1000";
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
