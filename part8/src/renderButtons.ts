import { fromEvent, zip } from "rxjs";
import { map, scan, mergeAll, mergeMap } from "rxjs/operators";

import { Item } from "./cart";
import { render } from "./renderList";

export const createObservables = (cart: Array<Item>) => {};

const renderButton = (item: Item) => {
  return `<div>
    <button id="add-${item.code}-button">
      ${item.name} 하나 더
    </button>
  </div>`;
};

export const renderButttons = (cart: Array<Item>) => {
  const buttons = document.getElementById("buttons");
  if (buttons === null) {
    return;
  }

  buttons.innerHTML = cart.map(renderButton).join("");
};
