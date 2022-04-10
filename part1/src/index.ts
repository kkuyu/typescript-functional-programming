import * as C from "./clip6";

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Total price: ${C.main()}</h1>
  `;
}
