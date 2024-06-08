/* eslint-disable */
import "bootstrap";
import "./style.css";

let body = document.body;
body.style.backgroundColor = "green";

let divCard = document.querySelector("#card");
divCard.classList.add("card-background");

let allSymbols = ["♦", "♥", "♠", "♣"];
let symbolSelector = Math.floor(Math.random() * allSymbols.length);

let allNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let numberSelector = Math.floor(Math.random() * allNumbers.length);

let topSymbol = document.createElement("div");
topSymbol.classList.add("top-symbol");
topSymbol.setAttribute("id", "topSymbol");
divCard.appendChild(topSymbol);
topSymbol.textContent = allSymbols[symbolSelector];

let cardNumber = document.createElement("div");
cardNumber.classList.add("card-number");
cardNumber.setAttribute("id", "card-number");
divCard.appendChild(cardNumber);
cardNumber.textContent = allNumbers[numberSelector];

let buttomSymbol = document.createElement("div");
buttomSymbol.classList.add("buttom-symbol");
buttomSymbol.setAttribute("id", "buttom-symbol");
divCard.appendChild(buttomSymbol);
buttomSymbol.textContent = allSymbols[symbolSelector];

if (allSymbols[symbolSelector] == "♦" || allSymbols[symbolSelector] == "♥") {
  buttomSymbol.style.color = "red";
  topSymbol.style.color = "red";
}
