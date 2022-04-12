import "./index.css";
import { cart, Item } from "./cart";
import * as O from "./option";

const stockItem = (item: Item): string => {
  const optionDiscountPrice = O.fromUndefined(item.discountPrice);
  const discountPrice = O.getOrElse(optionDiscountPrice, 0);

  let saleText = "";
  if (O.isSome(optionDiscountPrice)) {
    saleText = `(${discountPrice}원 할인)`;
  }

  return `
    <li>
      <h2>${item.name}</h2>
      <div>가격: ${item.price - discountPrice}원 ${saleText}</div>
      <div>수량: ${item.quantity}상자</div>
    </li>
  `;
};

const outOfStockItem = (item: Item): string => `
  <li class='gray'>
    <h2>${item.name} (품절)</h2>
    <div class='strike'>가격: ${item.price}원</div>
    <div class='strike'>수량: ${item.quantity}상자</div>
  </li>
`;

const makeItem = (item: Item): string => {
  if (item.outOfStock) return outOfStockItem(item);
  return stockItem(item);
};

const totalCalculator = (list: Array<Item>, getValue: (item: Item) => number) => {
  return list
    .filter((item) => item.outOfStock === false)
    .map(getValue)
    .reduce((total, value) => total + value, 0);
};

const totalCount = (list: Array<Item>): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량: ${totalCount}상자`;
};

const totalPrice = (list: Array<Item>): string => {
  const totalPrice = totalCalculator(list, (item) => item.price * item.quantity);
  const totalDiscountPrice = totalCalculator(list, (item) => {
    // item.discountPrice |> O.fromUndefined(%) |> O.getOrElse(%, 0)
    const discountPrice = O.getOrElse(O.fromUndefined(item.discountPrice), 0);
    return discountPrice * item.quantity;
  });
  return `<h2>전체 가격: ${totalPrice - totalDiscountPrice}원 (총 ${totalDiscountPrice}원 할인)`;
};

const list = (list: Array<Item>) => {
  return `
    <ul>
    ${list.map(makeItem).reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

const app = document.getElementById("app");
if (app != null) {
  app.innerHTML = `
  <h1>장바구니</h1>
  ${list(cart)}
  ${totalCount(cart)}
  ${totalPrice(cart)}
  `;
}
