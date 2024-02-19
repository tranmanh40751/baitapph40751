var game = {
  scored: ["Ronaldo", "Benzema", "Bale"],
  score: [1, 2, 1],
};

for (var i = 0; i < game.scored.length; i++) {
  console.log("Cầu thủ " + (i + 1) + ":" + game.scored[i]);
}

var ketQuaTranDau = [2, 2, 3, 1];
var soTranThang = 0;
var soTranThua = 0;
var soTranHoa = 0;

for (var i = 0; i < ketQuaTranDau.length; i++) {
  if (ketQuaTranDau[i] == 3) {
    soTranThua++;
  } else if (ketQuaTranDau[i] == 2) {
    soTranHoa++;
  } else {
    soTranThang++;
  }
}

console.log("Số trận thắng", soTranThang);
console.log("Số trận thua", soTranThua);
console.log("Số trận hòa", soTranHoa);

var scorers = [
  {
    name: "Bale",
    tiLe: 3.7,
  },
  {
    name: "Ramos",
    tiLe: 1.1,
  },
  {
    name: "Ronaldo",
    tiLe: 4.6,
  },
  {
    name: "Bale",
    tiLe: 2.7,
  },
];

scorers.sort(function (a, b) {
  return b.tiLe - a.tiLe;
});
var topScorers = scorers.slice(0, 3);
console.log(topScorers);
