import "./index.css";
import { cart, Item } from "./cart";

const stockItem = (item: Item): string => `
  <li>
    <h2>${item.name}</h2>
    <div>가격: ${item.price}원</div>
    <div>수량: ${item.quantity}상자</div>
  </li>
`;

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
  // map, forEach의 잘못된 사용 방법
  // - 의미 있는 값을 리턴하지 않음
  // - 더 이상 함수를 합성할 수 없음
  // - 부수 효과를 발생시킴
  let result: Array<number> = [];
  list.forEach(function (item) {
    if (item.outOfStock === false) {
      result.push(getValue(item));
    }
  });
  return result.reduce((total, value) => total + value, 0);
};

const totalCount = (list: Array<Item>): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량: ${totalCount}상자`;
};

const totalPrice = (list: Array<Item>): string => {
  const totalPrice = totalCalculator(list, (item) => item.price * item.quantity);
  return `<h2>전체 가격: ${totalPrice}원`;
};

const list = (list: Array<Item>) => {
  // return ((list) => {
  //   let html = "<ul>";
  //   for (let i = 0; i < list.length; i++) {
  //     html += makeItem(list[i]);
  //   }
  //   html += "</ul>";
  //   return `
  //     ${html}
  //   `;
  // })(list);
  //
  // return ((list) => {
  //   let html = "<ul>";
  //   html += list.map((item) => makeItem(item)).join("");
  //   html += "</ul>";
  //   return `
  //     ${html}
  //   `;
  // })(list);
  return `
    <ul>
    ${list
      // 1. 목록에 있는 모든 아이템을 태그로 변경
      .map(makeItem)
      // 2. 태그의 목록을 모두 하나의 문자열로 연결
      .reduce((tags, tag) => tags + tag, "")}
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
