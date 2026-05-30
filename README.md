# TR
# UNO Oyunu — Pass & Play
İki oyuncunun tek cihazı sırayla paylaşarak oynadığı, saf HTML, CSS ve Vanilla JavaScript ile geliştirilmiş duyarlı bir UNO kart oyunu.

## Canlı Önizleme

[Proje Önizleme.]()

![Proje Görseli]()

## Oyun Mekaniği

- Pass & Play sistemi — Her tur geçişinde ekran kapanır; cihaz diğer oyuncuya verilir, hazır olunca "Hazırım" butonuna basılır
- Kart oynama — Masadaki kartla aynı renk veya aynı sayıya sahip kartlar oynanabilir; geçerli kartlar yukarı yükselerek beyaz çerçeveyle vurgulanır
- Desteden kart çekme — Oynanacak kart yoksa desteden kart çekilir ve sıra geçer
- Kazananı belirleme — Elindeki son kartı oynayan oyuncu kazanır; kazanan ekranı gösterilir
- Yeniden oynama — Kazanan ekranındaki butonla oyun sıfırlanır

## Özellikler

- Pass & Play Overlay — Kart bilgilerini gizleyen geçiş ekranı
- Kazanan Overlay — Trofeli kutlama ekranı ve yeniden oynama butonu
- Geçerli Kart Vurgulama — Oynanabilir kartlar görsel olarak öne çıkar; geçersiz kartlar soluklaştırılır
- Deste Sayacı — Kalan kart adedi destede gösterilir
- Rakip El Gizleme — Rakip kartları arka yüzlü gösterilir (?)
- Toast Bildirimi — Deste bittiğinde kullanıcıya anlık bildirim
- Duyarlı Tasarım — Mobil, tablet ve masaüstü için optimize edilmiş düzenler
- Saf Teknoloji — Herhangi bir kütüphane veya framework kullanılmaz

## Kart Yapısı

- Renkler: Kırmızı, Sarı, Mavi, Yeşil
- Değerler: 0–9 (her renk için)
- El büyüklüğü: 7 kart
- Deste: Fisher-Yates algoritmasıyla karıştırılır

## Duyarlı Düzenler

| Ekran    | Genişlik         | Kart Boyutu |
| -------- |------------------| ------------|
| Mobil    | 375px Varsayılan | 52 × 74 px  |
| Tablet   | ≥ 768px          | 62 × 88 px  |
| Masaüstü | ≥ 1440px         | 72 × 100 px |

## Teknolojiler

| Teknoloji         | Açıklama                                            |
| ----------------- |-----------------------------------------------------|
| HTML5             | Semantik oyun alanı yapısı                          |
| CSS3              | Grid, Flexbox, @media sorguları, animasyonlar       |
| JavaScript (ES6+) | Oyun mantığı, DOM manipülasyonu, event listener'lar |

## Proje Yapısı
uno-game/ <br>
├── index.html <br>
└── assets/ <br>
    ├── css/ <br>
    │   └── style.css <br>
    └── js/ <br>
        └── uno-game.js <br>

## Kurulum
Proje herhangi bir bağımlılık gerektirmez. Klonladıktan sonra doğrudan tarayıcıda açabilirsiniz.
bash# Repoyu klonlayın
git clone https://github.com/kullanici-adi/uno-game.git

### Proje klasörüne girin
cd uno-game

### index.html dosyasını tarayıcıda açın
open index.html

## Tasarım Detayları

  - Arka Plan: #2c2c54 → #1a1a30 radyal degrade
  - Kart Renkleri:

    - 🔴 Kırmızı: #ff5f5f → #c0392b
    - 🔵 Mavi: #4da6ff → #1a5fa8
    - 🟢 Yeşil: #4ddb7a → #1e8449
    - 🟡 Sarı: #ffe44d → #d4ac00


- Vurgu Rengi: #6c63ff (mor — aktif oyuncu, butonlar)
- Font: Segoe UI / System UI




# EN
# UNO Game — Pass & Play
A responsive UNO card game built with pure HTML, CSS, and Vanilla JavaScript, where two players share a single device and take turns.
Live Preview

## Project Preview.

## Game Mechanics

- Pass & Play system — The screen closes on each turn transition; the device is handed to the other player, who presses "I'm Ready" when set
- Playing a card — Cards matching the top card's color or number can be played; valid cards rise up and are highlighted with a white border
- Drawing from the deck — If no card can be played, a card is drawn from the deck and the turn passes
- Determining the winner — The player who plays their last card wins; a winner screen is displayed
- Replay — The game resets via the button on the winner screen

## Features

- Pass & Play Overlay — A transition screen that hides card information
- Winner Overlay — A trophy celebration screen with a replay button
- Valid Card Highlighting — Playable cards are visually emphasized; invalid cards are dimmed
- Deck Counter — Remaining card count is displayed on the deck
- Opponent Hand Concealment — Opponent's cards are shown face-down (?)
- Toast Notification — Instant notification when the deck runs out
- Responsive Design — Optimized layouts for mobile, tablet, and desktop
- Pure Technology — No libraries or frameworks used

## Card Structure

- Colors: Red, Yellow, Blue, Green
- Values: 0–9 (for each color)
- Hand size: 7 cards
- Deck: Shuffled with the Fisher-Yates algorithm

## Responsive Layouts

| Screen    | Width         | Card Size |
| -------- |------------------| ------------|
| Mobile    | 375px Default | 52 × 74 px  |
| Tablet   | ≥ 768px          | 62 × 88 px  |
| Desktop | ≥ 1440px         | 72 × 100 px |

## Technologies

| Technology         | Description                                            |
| ----------------- |-----------------------------------------------------|
| HTML5             | Semantic game area structure                          |
| CSS3              | Grid, Flexbox, @media queries, animations       |
| JavaScript (ES6+) | Game logic, DOM manipulation, event listeners |

## Project Structure
uno-game/ <br>
├── index.html <br>
└── assets/ <br>
    ├── css/ <br>
    │   └── style.css <br>
    └── js/ <br>
        └── uno-game.js <br>

## Installation
The project requires no dependencies. After cloning, you can open it directly in the browser.
bash# Clone the repo
git clone https://github.com/username/uno-game.git

### Navigate to the project folder
cd uno-game

### Open index.html in the browser
open index.html

## Design Details

- Background: #2c2c54 → #1a1a30 radial gradient
- Card Colors:

  - 🔴 Red: #ff5f5f → #c0392b
  - 🔵 Blue: #4da6ff → #1a5fa8
  - 🟢 Green: #4ddb7a → #1e8449
  - 🟡 Yellow: #ffe44d → #d4ac00

- Accent Color: #6c63ff (purple — active player, buttons)
- Font: Segoe UI / System UI
