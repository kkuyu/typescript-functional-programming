import "./styles.css";
import * as C from "./clip3-1";

C.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello!</h1>`;
}
