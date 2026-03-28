// Renk Array'i Olusturuyoruz
const colors = ["Kırmızı", "Sarı", "Mavi", "Yeşil"];

// Bos Array Olusturuyoruz
let cards = [];

// Renk Array'ine ve 0'dan 9'a Kadar Rakamlari Ekliyoruz
for (let color of colors) {
  for (let number = 0; number <= 9; number++) {
    cards.push(`${color} ${number}`);
  }
}

console.log("Oluşturulan Kartlar:");
console.log(cards);

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