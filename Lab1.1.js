var player1 = [];
var player2 = [];
var gk1 = "thuMon1";
var gk2 = "thuMon2";
var fieldPlayers = [];

player1.push(thuMon1);
player1 = [...fieldPlayers];
player2.push(thuMon2);
player2 = [...fieldPlayers];
var allPlayers = [...player1, ...player2];
var players1Final = ["Messi", "Neymar", "Suárez"];

var game = {
  odds: {
    team1: 3,
    draw: 4,
    team2: 2,
  },
};

var team1 = game.odds.team1;
var draw = game.odds.draw;
var team2 = game.odds.team2;

var nameGoals = [];
function printGoals(...players) {
  nameGoals = [...players];
  console.log(nameGoals);
}

printGoals("name1", "name2", "name3");

var winGame;

switch (true) {
  case team2 < team1:
    winGame = "team1 Win";
    break;
  case team1 < team2:
    winGame = "team2 Win";
    break;
  default:
    winGame = "Draw";
}
console.log(winGame);
