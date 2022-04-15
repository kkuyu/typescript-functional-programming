import "./styles.css";

import * as main from "./clip3-1";
import * as mainTry from "./clip4-1";

console.log("===== main");
main.main();
console.log("===== mainTry");
mainTry.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello!</h1>`;
}
