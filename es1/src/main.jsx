import ReactDOM from "react-dom/client";
import { Hello } from "./Hello.jsx";
import { Message } from "./Message.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Hello />
    <Message />
  </>
);
