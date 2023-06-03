const $container = document.querySelector("#container");

const state = {
  post: [],
};

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.ok) {
      const data = await response.json();
      state.post = data;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

const generateTemplateHTML = (post) => {
  return `
      <li>${post.title}</li>
      `;
};

const renderHTML = () => {
  const HTML = state.post.map((post) => generateTemplateHTML(post)).join(""); //? qui creo le li, grazie alla callback di generateTemplateHTML
  $container.innerHTML = `<ul>${HTML}</ul>`; //? qui creo l'ul e ci metto dentro HTML con il template literal
};

//? innerHTML è un metodo per scrivere nel documento HTML

const init = async () => {
  await fetchData();
  renderHTML();
};

init();
