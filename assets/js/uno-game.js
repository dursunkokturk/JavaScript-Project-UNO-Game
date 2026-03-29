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

console.log("Karıştırılmış Kartlar:");
console.log(cards);

cards.forEach(card => console.log(card));

// Kartlari Oyunculara Dagitiyoruz
let userCards = cards.slice(0, 7);      // İlk 7 kart kullanıcıya
let computerCards = cards.slice(7, 14); // Sonraki 7 kart bilgisayara

// Masadan Kart Aliyoruz
let masa = cards[14];

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

// Ayni Renkteki Kartlari Siliyoruz
let userRemaining = userCards.filter(card => card.color !== masa.color);
let computerRemaining = computerCards.filter(card => card.color !== masa.color);

// Kalan Kartlarin Toplamini Aliyoruz
let userTotal = totalCards(userRemaining);
let computerTotal = totalCards(computerRemaining);

console.log(`Kullanıcı Aynı Renk Toplamı: ${userTotal}`);
console.log(`Bilgisayar Aynı Renk Toplamı: ${computerTotal}`);

if (userTotal < computerTotal) {
  console.log("Kazanan: Kullanıcı 🎉");
} else if (userTotal > computerTotal) {
  console.log("Kazanan: Bilgisayar 💻");
} else {
  console.log("Berabere 🤝");
}