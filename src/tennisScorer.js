class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
    this.scoreMap = ["Love", "15", "30", "40"];
  }
  player1Scores() {
    this.player1Points += 1;
  }
  player2Scores() {
    this.player2Points += 1;
  }
  showScore() {
    const left = this.scoreMap[this.player1Points] || "40";
    const right = this.scoreMap[this.player2Points] || "40";
    return `${left} - ${right}`;
  }
}
export default TennisScorer;
