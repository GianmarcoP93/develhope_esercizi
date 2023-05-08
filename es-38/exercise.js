// function printName() {
//   let helloName = "Hello John";

//   setTimeOut(function inner() {
//     return helloName;
//   }, 1000);
//   return inner;
// }

// console.log(printName()());

function printName() {
  let helloName = "Hello John";

  const inner = () => {
    setTimeout(() => {
      console.log(helloName);
    }, 1000);
  };
  return inner;
}

printName()();

// setTimeout(() => {
//   console.log(printName()());
// }, 1000);

// function printName() {
//   let helloName = "Hello John";
//   function inner() {
//     return helloName;
//   }
//   return inner;
// }

// console.log(printName()());
