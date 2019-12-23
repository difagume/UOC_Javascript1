export default class Team {
  constructor(data) {
    const { team, teamId, stadium, website, logo } = data;

    this.teamId = teamId;
    this.team = team;
    this.stadium = stadium;
    this.website = website;
    this.logo = logo;
  }

  logData() {
    console.log("Team details");
    console.log(`${this.team} (${this.stadium}), ${this.website}`);
  }
}
