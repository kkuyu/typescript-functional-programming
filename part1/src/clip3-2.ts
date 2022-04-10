// 토마토: 7000원
// 오렌지: 15000원
// 사과: 10000원

// 전역 변수라는 부수효과를 사용
// 예측하기 어려운 오류의 발생 가능성이 있음
export let totalPrice = 0;

function addTomato() {
  totalPrice += 7000;
}

function addOrange() {
  totalPrice += 15000;
}

function addApple() {
  totalPrice += 10000;
}

function list1() {
  // 토마토, 오렌지, 사과 한 상자
  addTomato();
  addOrange();
  addApple();
}

function list2() {
  // 토마토 2상자
  addTomato();
  addTomato();
}

function list3() {
  // addOrange 함수를 직접 100번 호출 하는 대신
  // 함수를 100번 호출 하도록 명령하는 코드를 작성
  // 오렌지 100상자
  for (let i = 0; i < 100; i++) {
    addOrange();
  }
}

function main() {
  // 계산을 어떻게 하는가에 초점을 맞춤
  // list1();
  // list2();
  list3();
}

main();
