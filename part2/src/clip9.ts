const suits = ["♠", "♥", "♣", "♦"];
const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const cards: Array<string> = [];
for (const suit of suits) {
  for (const number of numbers) {
    cards.push(suit + number);
  }
}

const cards2: Array<string> = suits.flatMap((suit) => {
  return numbers.map((number) => {
    return suit + number;
  });
});

export const main = () => {
  const app = document.getElementById("app");
  if (app === null) {
    return;
  }

  app.innerHTML = `
  <h1>cards</h1>
  <pre>${JSON.stringify(cards2, null, 2)}
  </pre>
  `;
};

main();
