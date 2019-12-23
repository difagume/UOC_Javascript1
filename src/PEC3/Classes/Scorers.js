export default class Scorers {
  constructor(data) {
    this.scorers = data;
  }

  logData() {
    console.log("Scorers:");

    this.scorers.forEach(scorer => {
      const { player, team, goals } = scorer;

      console.log(`${player} (${team}): ${goals}`);
    });
  }
}
