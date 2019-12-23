export default class Matches {
  constructor(data) {
    this.matches = data;
  }

  logData() {
    console.log(`Matches`);

    for (const matchDayNumber in this.matches) {
      const matchDayResults = this.matches[matchDayNumber];

      console.log(`Matchday #${matchDayNumber}`);

      matchDayResults.forEach(match => match.logData());
    }
  }
}
