// create a football league with country , teams  each team some players. create methods to get the total number of players in the league

const league = {
  country: "England",
  teams: [
    {
      name: "ManU",
      players: ["Bruno", "Mainoo", "Maguire"],
    },
    {
      name: "Chelsea",
      players: ["Palmer", "James", "Neto" ,"Garnacho"],
    },
  ],
  showTotalPlayers: function(){
    let total = 0

    for(let i = 0 ; i < this.teams.length; i++ ){
           total = total + this.teams[i].players.length
    }

    console.log(total)
  }
};


league.showTotalPlayers()