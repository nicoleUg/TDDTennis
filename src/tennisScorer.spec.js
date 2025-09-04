import TennisScorer from "./tennisScorer.js";

describe("TennisScorer", () => {
  it("empieza Love - Love", () => {
    const s = new TennisScorer();
    expect(s.showScore()).toBe("Love - Love");
  });

  it("Jugador 1 anota => 15 - Love", () => {
    const s = new TennisScorer();
    s.player1Scores();
    expect(s.showScore()).toBe("15 - Love");
  });

  it("Jugador 1 anota dos veces => 30 - Love", () => {
    const s = new TennisScorer();
    s.player1Scores();
    s.player1Scores();
    expect(s.showScore()).toBe("30 - Love");
  });

  it("Jugador 1 y Jugador 2 anotan => 15 - 15", () => {
    const s = new TennisScorer();
    s.player1Scores();
    s.player2Scores();
    expect(s.showScore()).toBe("15 - 15");
  });

  it("P1: 3, P2: 2 => 40 - 30", () => {
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

  it("Advantage Player 1 y luego punto => Game for Player 1", () => {
    const s = new TennisScorer();
    s.player1Scores(); s.player1Scores(); s.player1Scores();
    s.player2Scores(); s.player2Scores(); s.player2Scores();
    s.player1Scores();
    expect(s.showScore()).toBe("Advantage Player 1");
    s.player1Scores();
    expect(s.showScore()).toBe("Game for Player 1");
  });

  it("Game sin deuce: 4-0 => Game for Player 1", () => {
    const s = new TennisScorer();
    s.player1Scores(); s.player1Scores(); s.player1Scores(); s.player1Scores();
    expect(s.showScore()).toBe("Game for Player 1");
  });

  it("Game para Player 2: 1-4 => Game for Player 2", () => {
    const s = new TennisScorer();
    s.player2Scores(); s.player2Scores(); s.player1Scores(); s.player2Scores(); s.player2Scores();
    expect(s.showScore()).toBe("Game for Player 2");
  });
});
