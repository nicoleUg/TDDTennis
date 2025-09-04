import TennisScorer from "./tennisScorer.js";

const marcador = document.querySelector("#marcador");
const btnP1 = document.querySelector("#p1-btn");
const btnP2 = document.querySelector("#p2-btn");

const scorer = new TennisScorer();

function render() {
  marcador.textContent = scorer.showScore();
}

render();

btnP1.addEventListener("click", () => {
  scorer.player1Scores();
  render();
});

btnP2.addEventListener("click", () => {
  scorer.player2Scores();
  render();
});
