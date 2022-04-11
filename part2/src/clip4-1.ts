import "./index.css";
import { cart } from "./cart";

const list = () => {
  let html = "<ul>";

  for (let i = 0; i < cart.length; i++) {
    const { outOfStock, name, price, quantity } = cart[i];
    if (outOfStock === false) {
      html += "<li>";
      html += `<h2>${name}</h2>`;
      html += `<div>가격: ${price}원</div>`;
      html += `<div>수량: ${quantity}상자</div>`;
      html += "</li>";
    } else {
      html += "<li class='gray'>";
      html += `<h2>${name} (품절)</h2>`;
      html += `<div class='strike'>가격: ${price}원</div>`;
      html += `<div class='strike'>수량: ${quantity}상자</div>`;
      html += "</li>";
    }
  }
  html += "</ul>";

  let totalCount = 0;
  for (let i = 0; i < cart.length; i++) {
    const { outOfStock, quantity } = cart[i];
    if (outOfStock === false) {
      totalCount += quantity;
    }
  }
  html += `<h2>전체 수량: ${totalCount}상자</h2>`;

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const { outOfStock, price, quantity } = cart[i];
    if (outOfStock === false) {
      totalPrice += price * quantity;
    }
  }
  html += `<h2>전체 가격: ${totalPrice}원</h2>`;

  return `
    ${html}
  `;
};

const app = document.getElementById("app");
if (app != null) {
  app.innerHTML = `
  <h1>장바구니</h1>
  ${list()}
  `;
}
