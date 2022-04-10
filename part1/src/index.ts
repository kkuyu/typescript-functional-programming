import * as C from "./clip3-0";

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Total price: ${Math.round(C.totalPrice)}</h1>
  `;
}
