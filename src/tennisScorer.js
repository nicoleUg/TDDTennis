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
    const p1 = this.player1Points;
    const p2 = this.player2Points;
    if (p1 >= 3 && p2 >= 3) {
      if (p1 === p2) return "Deuce";
      if (p1 - p2 === 1) return "Advantage Player 1";
      if (p2 - p1 === 1) return "Advantage Player 2";
    }
    const left = this.scoreMap[p1] || "40";
    const right = this.scoreMap[p2] || "40";
    return `${left} - ${right}`;
  }
}
export default TennisScorer;
