import "./index.css";
import { cart, Item } from "./cart";
import * as O from "./option";
import * as T from "./try";

console.clear();

type ParsedItem = { _tag: "parsedItem" } & Item;
type ParseError = { name: string; message: string };

const parseItem = (item: Item): T.Try<ParseError, ParsedItem> => {
  if (item.quantity < 1) {
    return T.failed({
      name: item.name,
      message: "상품은 반드시 한 개 이상 담아야 합니다.",
    });
  } else if (item.quantity > 10) {
    return T.failed({
      name: item.name,
      message: "한 번에 10개를 초과하여 구매할 수 없습니다.",
    });
  }
  return T.success({
    _tag: "parsedItem",
    ...item,
  });
};

type ArrayItem = Array<Item>;

const stockItem = (item: ParsedItem): string => {
  return `
    <li>
      <h2>${item.name}</h2>
      <div>가격: ${item.price}원</div>
      <div>수량: ${item.quantity}상자</div>
    </li>
  `;
};

const errorItem = (e: ParseError): string => `
  <li style="color: red;">
    <h2>${e.name}</h2>
    <div>${e.message}</div>
  </li>
`;

const outOfStockItem = (item: ParsedItem): string => `
  <li class="gray">
    <h2>${item.name} (품절)</h2>
    <div class='strike'>가격: ${item.price}원</div>
  </li>
`;

const renderItem = (item: Item): string => {
  const parsedItem = parseItem(item);
  const render = T.map(parsedItem, (item) => {
    if (item.outOfStock) {
      return outOfStockItem(item);
    } else {
      return stockItem(item);
    }
  });
  return T.getOrElse(render, errorItem);
};

const totalCalculator = (list: ArrayItem, getValue: (item: Item) => number) => {
  return list
    .filter((item) => {
      const parsedItem = parseItem(item);
      if (T.isSuccess(parsedItem)) {
        return item.outOfStock === false;
      }
      return false;
    })
    .map(getValue)
    .reduce((total, value) => total + value, 0);
};

const totalCount = (list: ArrayItem): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량: ${totalCount}상자`;
};

const totalPrice = (list: ArrayItem): string => {
  const totalPrice = totalCalculator(list, (item) => item.price * item.quantity);

  return `<h2>전체 가격: ${totalPrice}`;
};

const list = (list: ArrayItem) => {
  return `
    <ul>
    ${list.map(renderItem).reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

const render = (cart: ArrayItem) => {
  const app = document.getElementById("app");
  if (app != null) {
    app.innerHTML = `
    <h1>장바구니</h1>
    ${list(cart)}
    ${totalCount(cart)}
    ${totalPrice(cart)}
    `;
  }
};

export const main = () => {
  render(cart);
};
