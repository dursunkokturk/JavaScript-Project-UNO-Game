// =============================================
//  UNO OYUNU — PASS & PLAY
// =============================================

const HAND_SIZE = 7;
const COLORS = ["Kırmızı", "Sarı", "Mavi", "Yeşil"];
const COLOR_CLASS = {
  "Kırmızı": "red",
  "Sarı": "yellow",
  "Mavi": "blue",
  "Yeşil": "green"
};

let game;

// ---------- DESTE OLUŞTUR ----------
function createDeck() {
  const deck = [];
  for (const color of COLORS) {
    for (let number = 0; number <= 9; number++) {
      deck.push({ color, number });
    }
  }
  return deck;
}

// ---------- FISHER-YATES SHUFFLE ----------
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// ---------- OYUNU BAŞLAT ----------
function initGame() {
  const deck = createDeck();
  shuffle(deck);

  game = {
    player1: deck.slice(0, HAND_SIZE),
    player2: deck.slice(HAND_SIZE, HAND_SIZE * 2),
    masa: deck[HAND_SIZE * 2],
    deck: deck.slice(HAND_SIZE * 2 + 1),
    currentPlayer: 1
  };

  hideOverlay("win-overlay");
  hideOverlay("handoff-overlay");
  renderGame();
}

// ---------- GEÇERLİ HAMLe KONTROLÜ ----------
function isValidMove(card) {
  return card.color === game.masa.color || card.number === game.masa.number;
}

// ---------- DESTE'DEN KART ÇEK ----------
function drawCard(playerCards) {
  if (game.deck.length > 0) {
    playerCards.push(game.deck.shift());
    return true;
  }
  return false;
}

// ---------- KART OYNA ----------
function playCard(index) {
  const playerCards = game.currentPlayer === 1 ? game.player1 : game.player2;
  const selected = playerCards[index];

  if (!selected || !isValidMove(selected)) return;

  game.masa = selected;
  playerCards.splice(index, 1);

  if (playerCards.length === 0) {
    showWin(game.currentPlayer);
    return;
  }

  game.currentPlayer = game.currentPlayer === 1 ? 2 : 1;
  showHandoff();
}

// ---------- DESTEDEN KRT ÇEK (BUTON) ----------
function drawFromDeck() {
  const playerCards = game.currentPlayer === 1 ? game.player1 : game.player2;

  if (game.deck.length === 0) {
    showToast("Deste bitti!");
    return;
  }

  drawCard(playerCards);
  game.currentPlayer = game.currentPlayer === 1 ? 2 : 1;
  showHandoff();
}

// ---------- PASS & PLAY OVERLAY ----------
function showHandoff() {
  const next = game.currentPlayer;
  document.getElementById("handoff-title").textContent = `Sıra Oyuncu ${next}'de`;
  document.getElementById("handoff-desc").innerHTML =
    `Cihazı <strong>Oyuncu ${next}</strong>'e ver.<br>Hazır olunca butona bas.`;
  showOverlay("handoff-overlay");
}

function confirmHandoff() {
  hideOverlay("handoff-overlay");
  renderGame();
}

// ---------- KAZANAN ----------
function showWin(player) {
  document.getElementById("win-title").textContent = `Kazanan: Oyuncu ${player} 🎉`;
  showOverlay("win-overlay");
}

// ---------- OVERLAY YARDIMCILARI ----------
function showOverlay(id) {
  document.getElementById(id).classList.remove("hidden");
}
function hideOverlay(id) {
  document.getElementById(id).classList.add("hidden");
}

// ---------- TOAST BİLDİRİM ----------
function showToast(msg) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
    background:rgba(0,0,0,0.8); color:#fff; padding:8px 18px;
    border-radius:20px; font-size:0.85rem; z-index:200;
    pointer-events:none; transition:opacity 0.3s;
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = "0"; setTimeout(() => toast.remove(), 300); }, 1800);
}

// ---------- RENDER ----------
function renderGame() {
  const cp = game.currentPlayer;
  const opponent = cp === 1 ? 2 : 1;
  const activeCards  = cp === 1 ? game.player1 : game.player2;
  const hiddenCards  = cp === 1 ? game.player2 : game.player1;

  // Etiketler
  document.getElementById("label-top").textContent    = `Oyuncu ${opponent}`;
  document.getElementById("label-bottom").textContent = `Oyuncu ${cp}`;
  document.getElementById("count-top").textContent    = `${hiddenCards.length} kart`;

  // Masa
  renderMasa();

  // Deste sayısı
  document.getElementById("deck-count").textContent = game.deck.length;

  // Rakip — arka yüzlü
  renderHiddenCards("cards-top", hiddenCards.length);

  // Aktif oyuncu
  renderActiveCards("cards-bottom", activeCards);
}

function renderMasa() {
  const el = document.getElementById("masa");
  el.className = `card masa-card ${COLOR_CLASS[game.masa.color]}`;
  el.textContent = game.masa.number;
}

function renderHiddenCards(containerId, count) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  container.className = "card-list hidden-hand";

  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.className = "card card-back";
    div.textContent = "?";
    container.appendChild(div);
  }
}

function renderActiveCards(containerId, cards) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  container.className = "card-list";

  cards.forEach((card, index) => {
    const div = document.createElement("div");
    const cls = COLOR_CLASS[card.color];
    const valid = isValidMove(card);

    div.className = `card ${cls} ${valid ? "playable" : "disabled"}`;
    div.textContent = card.number;

    if (valid) {
      div.onclick = () => playCard(index);
    }

    container.appendChild(div);
  });
}

// ---------- EVENT LISTENERS ----------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("handoff-btn").addEventListener("click", confirmHandoff);
  document.getElementById("restart-btn").addEventListener("click", initGame);
  document.getElementById("deck-pile").addEventListener("click", drawFromDeck);

  initGame();
});