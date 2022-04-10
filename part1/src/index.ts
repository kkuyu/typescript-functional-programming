import * as C from "./clip4";

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Total price: ${Math.round(C.getTotalPrice())}</h1>
  `;
}
