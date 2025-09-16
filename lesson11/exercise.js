// in a certain country identified by name there are a certain number of tribes - each tribe has a population , create a object method to get the total population of that country

const country = {
     title: "kenya",
     tribes: [
        {
          population: 10,
        },
        {
            population: 1,
        }
     ],
     
     Totalpopulation: function(){
      let total = 0
      for(let i = 0; i < this.tribes.length; i++ ){
        total = total + this.tribes[i].population
      }
        console.log(total)
     },

    Numberoftribes: function(){
        console.log(this.tribes.length)
    }
}

country.Totalpopulation()
country.Numberoftribes()
