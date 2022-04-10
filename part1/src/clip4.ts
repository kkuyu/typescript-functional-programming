// 토마토: 7000원
// 오렌지: 15000원
// 사과: 10000원

function priceOfTomato() {
  return 7000;
}

function priceOfOrange() {
  return 15000;
}

function priceOfApple() {
  return 10000;
}

function getPrice(name: string) {
  switch (name) {
    case "tomato":
      return 7000;
    case "orange":
      return 15000;
    case "apple":
      return 10000;
    default:
      return 0;
  }
}

const priceOfFruit = {
  tomato: 7000,
  orange: 15000,
  apple: 10000,
};

const isEvenNumberOfLetters = {
  tomato: true,
  orange: true,
  apple: false,
};

const isEvenNumberOfLettersFn = (str: string) => str.length % 2 === 0;

function list1() {
  // 토마토, 오렌지, 사과 한 상자
  // return priceOfTomato() + priceOfOrange() + priceOfApple();
  // return getPrice("tomato") + getPrice("orange") + getPrice("apple");
  return priceOfFruit.tomato + priceOfFruit.orange + priceOfFruit.apple;
}

function list2() {
  // 토마토 2상자
  // return priceOfTomato() + priceOfTomato();
  // return getPrice("tomato") + getPrice("tomato");
  return priceOfFruit.tomato + priceOfFruit.tomato;
}

function list3() {
  // 오렌지 100상자
  // return priceOfOrange() * 100;
  // return getPrice("orange") * 100;
  return priceOfFruit.orange * 100;
}

export function getTotalPrice() {
  // return list1();
  // return list2();
  return list3();
}
