import "./styles.css";

import * as main from "./clip3-0";

console.clear();
main.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello!</h1>`;
}
