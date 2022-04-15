import "./styles.css";

import * as main from "./clip5-1";

console.log("===== main");
main.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello!</h1>`;
}
