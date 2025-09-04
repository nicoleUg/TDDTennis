import TennisScorer from "./tennisScorer.js";

describe("TennisScorer", () => {
  //Empieza sin puntos     --> "Love - Love"
  it("game empieza con ambos en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto y el jugador en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca 2 puntos y jugador 2 en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("30 - Love");
  });
  it("El Jugador 1 marca 3 puntos y jugador 2 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("40 - Love");
  });
   it("Jugador 1 y Jugador 2 anotan => 15 - 15", () => {
    const s = new TennisScorer();
    s.player1Scores();
    s.player2Scores();
    expect(s.showScore()).toBe("15 - 15");
  });
  it("P1: 3 puntos, P2: 2 puntos => 40 - 30", () => {
    const s = new TennisScorer();
    s.player1Scores(); s.player1Scores(); s.player1Scores();
    s.player2Scores(); s.player2Scores();
    expect(s.showScore()).toBe("40 - 30");
  });
  it("P1: 3, P2: 3 => Deuce", () => {
    const s = new TennisScorer();
    s.player1Scores(); s.player1Scores(); s.player1Scores();
    s.player2Scores(); s.player2Scores(); s.player2Scores();
    expect(s.showScore()).toBe("Deuce");
  });
});