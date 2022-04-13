import "./styles.css";
import * as C from "./clip5";

C.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello!</h1>`;
}
