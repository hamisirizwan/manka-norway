// in your village there are a number of households - each household has father , mother and children , conduct a census in the village the village

const village = {
    title:"Busia",
    households:[
       {
        hasMother:true,
        hasFather:true,
        children:5
       },
           {
        hasMother:true,
        hasFather:false,
        children: 8
       }
    ],
    getTotalPopulation: function(){
         let total = 0

         for(let i  = 0 ; i < this.households.length; i++) {
             const currentHousehold = this.households[i]
             let totalMembers = currentHousehold.children

             if(currentHousehold.hasFather){
                totalMembers = totalMembers + 1
             }

             if(currentHousehold.hasMother){
                 totalMembers = totalMembers + 1
             }

             total = total + totalMembers

         }

         console.log(total)
    }
}

village.getTotalPopulation()