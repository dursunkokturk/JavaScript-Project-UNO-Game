// Renk Array'i Olusturuyoruz
const colors = ["Kırmızı", "Sarı", "Mavi", "Yeşil"];

// Bos Array Olusturuyoruz
let cards = [];

// Renk Array'ine ve 0'dan 9'a Kadar Rakamlari Ekliyoruz
for (let color of colors) {
  for (let number = 0; number <= 9; number++) {
    cards.push({ color: color, number: number });
  }
}

console.log("Oluşturulan Kartlar:");
console.log(cards);

// Fisher-Yates Shuffle
function shuffle(array) {

  // 0 ile i arasında rastgele bir indeks seç
  // array[i] ile array[j] yi Yer Degistiriyoruz
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Kartlari Karistiriyoruz
shuffle(cards);

// Kartlari Dagitiyoruz
let player1Cards = cards.slice(0, 7);
let player2Cards = cards.slice(7, 14);

// Masa kartı
masa = cards[14];

// Deste
let deck = cards.slice(15);

// Sıra
let currentPlayer = 1;

// console.log("Karıştırılmış Kartlar:");
// console.log(cards);

// cards.forEach(card => console.log(card));

// Kartlari Oyunculara Dagitiyoruz
// let userCards = cards.slice(0, 7);      // İlk 7 kart kullanıcıya
// let computerCards = cards.slice(7, 14); // Sonraki 7 kart bilgisayara

// Masadan Kart Aliyoruz
// let masa = cards[14];
console.log("Oyun Başladı");
console.log("Masadaki Kart:");
console.log(`${masa.color} ${masa.number}`);

// Kartlari Ekrana Yazdiriyoruz
// function printCards(player, cardList) {
//     console.log(`${player} Kartları:`);
//     cardList.forEach(card => console.log(`${card.color} ${card.number}`));
//     console.log("");
// }

// Kazanani Belirliyoruz
// Kartların toplamını hesapla
function totalCards(cardList) {
  return cardList.reduce((sum, card) => sum + card.number, 0);
}

while (true) {

  let playerCards = currentPlayer === 1 ? player1Cards : player2Cards;

  console.log(`\n--- Oyuncu ${currentPlayer} ---`);
  console.log(`Masadaki Kart: ${masa.color} ${masa.number}`);

  // Kartlari Gosteriyoruz
  playerCards.forEach((card, i) => {
    console.log(`${i}: ${card.color} ${card.number}`);
  });

  // Uygun Kart Var Mi Kontrolu Yapiyoruz
  let validIndexes = playerCards
    .map((card, i) =>
      (card.color === masa.color || card.number === masa.number) ? i : -1
    )
    .filter(i => i !== -1);

  // Uygun Kart Yoksa Desteden Aliyoruz
  if (validIndexes.length === 0) {
    console.log("Kart yok → desteden çekiliyor");

    if (deck.length > 0) {
      playerCards.push(deck.shift());
    } else {
      console.log("Deste bitti!");

      let total1 = totalCards(player1Cards);
      let total2 = totalCards(player2Cards);

      if (total1 < total2) console.log("Kazanan: Oyuncu 1");
      else if (total2 < total1) console.log("Kazanan: Oyuncu 2");
      else console.log("Berabere");

      break;
    }

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    continue;
  }

  // Kullanicidan Secim Aliyoruz
  let choice = prompt(`Oyuncu ${currentPlayer}, kart indexi gir:`);

  choice = Number(choice);
  let selectedCard = playerCards[choice];

  // Gecersiz Secim Kontrolu
  if (
    !selectedCard ||
    (selectedCard.color !== masa.color &&
     selectedCard.number !== masa.number)
  ) {
    console.log("Geçersiz kart!");
    continue;
  }

  // Karti Oynuyoruz
  masa = selectedCard;
  playerCards.splice(choice, 1);

  console.log(`Atılan Kart: ${masa.color} ${masa.number}`);

  // Kazanan Oyuncu
  if (playerCards.length === 0) {
    console.log(`Kazanan: Oyuncu ${currentPlayer} 🎉`);
    break;
  }

  // Sira Degistiriyoruz
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}