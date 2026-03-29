const handSize = 7;

// Renk Array'i Olusturuyoruz
const colors = ["Kırmızı", "Sarı", "Mavi", "Yeşil"];

let game;

// Bos Array Olusturuyoruz
let cards = [];

// Deck Olusturuyoruz
function createDeck() {
  let deck = [];

  // Renk Array'ine ve 0'dan 9'a Kadar Rakamlari Ekliyoruz
  for (let color of colors) {
    for (let number = 0; number <= 9; number++) {
      deck.push({ color, number });
    }
  }

  return deck;
}

// Fisher-Yates Shuffle
function shuffle(deck) {

  // 0 ile i arasında rastgele bir indeks seç
  // array[i] ile array[j] yi Yer Degistiriyoruz
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Oyunu Baslatiyoruz
function initGame() {
  let deck = createDeck();
  shuffle(deck);

  game = {
    // Kartlari Dagitiyoruz
    player1: deck.slice(0, handSize),
    player2: deck.slice(handSize, handSize * 2),
    masa: deck[handSize * 2],
    deck: deck.slice(handSize * 2 + 1),
    currentPlayer: 1
  };

  renderGame();
}

// Yapilacak Hamle Var Mi Kontrolu
function isValidMove(card) {
  return card.color === game.masa.color || card.number === game.masa.number;
}

// Oyuncu Kart Cekme
function drawCard(playerCards) {
  if (game.deck.length > 0) {
    playerCards.push(game.deck.shift());
  }
}

// Kart Oynuyoruz
function playCard(index) {
  let playerCards = game.currentPlayer === 1
    ? game.player1
    : game.player2;

  let selected = playerCards[index];

  if (!isValidMove(selected)) {
    alert("Geçersiz kart!");
    return;
  }

  // Karti Oyna
  game.masa = selected;
  playerCards.splice(index, 1);

  // Kazandi Mi?
  if (playerCards.length === 0) {
    alert(`Kazanan: Oyuncu ${game.currentPlayer}`);
    return;
  }

  // Sira Degistir
  game.currentPlayer = game.currentPlayer === 1 ? 2 : 1;

  renderGame();
}

function renderGame() {

  renderCards("player1", game.player1, 1);
  renderCards("player2", game.player2, 2);

  renderMasa();
}

function renderMasa() {
  const masaDiv = document.getElementById("masa");
  masaDiv.className = "card";

  let card = game.masa;

  masaDiv.textContent = card.number;

  addColorClass(masaDiv, card.color);
}

// Kartlari Bas
function renderCards(containerId, cards, playerNumber) {

  const container = document.getElementById(containerId);
  container.innerHTML = "";

  cards.forEach((card, index) => {

    const div = document.createElement("div");
    div.classList.add("card");

    addColorClass(div, card.color);

    div.textContent = card.number;

    // Sirasi Gelen Oyuncu Tiklayabilir
    if (game.currentPlayer === playerNumber) {
      div.onclick = () => playCard(index);
    }

    container.appendChild(div);
  });
}

// Renkler
function addColorClass(element, color) {
  if (color === "Kırmızı") element.classList.add("red");
  if (color === "Mavi") element.classList.add("blue");
  if (color === "Yeşil") element.classList.add("green");
  if (color === "Sarı") element.classList.add("yellow");
}

// 🎯 OYUNU BAŞLAT
initGame();