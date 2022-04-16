import "./styles.css";

import * as main from "./clip6-3";

console.log("===== main");
main.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello!</h1>`;
}
