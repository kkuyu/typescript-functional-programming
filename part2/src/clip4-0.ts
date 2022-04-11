import "./index.css";
import { cart } from "./cart";

const list = () => {
  let html = "";

  return `
    <ul>
      ${html}
    </ul>
  `;
};

const app = document.getElementById("app");
if (app != null) {
  app.innerHTML = `
  <h1>장바구니</h1>
  ${list()}
  `;
}
