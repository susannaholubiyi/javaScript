var lagos = {
    name: "Lagos",
    population: 15_300_000,
    temp: 33,
    currency: "naira"
}

var abuja = {
    name: "Abuja",
    population: 3_800_000,
    temp: 37,
    currency: "naira"
}

var djibouti = {
    name: "Djibouti",
    population: 1_200_000,
    temp: 31,
    currency: "franc"
}

var haiti = {
    name: "haiti",
    population: 11_500_000,
    temp: 23,
    currency: "goud"
}
var kittsAndNevis = {
    name: "St kitts and nevis",
    population: 47_000,
    temp: 23,
    currency: "xcd"
}

var cuba = {
    name: "cuba",
    population: 11_200_000,
    temp: 26,
    currency: "cub"
}
var canada = {
    name: "canada",
    population: 38_000_000,
    temp: 5,
    currency: "dollar"
}

var dubai = {
    name: "dubai",
    population: 3_300_000,
    temp: 25,
    currency: "dirham"
}

var china = {
    name: "china",
    population: 14_000_000_000,
    temp: 25,
    currency: "yuan"
}


let demographs = [[null, lagos, abuja, djibouti],[haiti, kittsAndNevis, cuba, null], [canada, null, dubai, china]]
let sumOfPopulation = 0;
// for(const demograph in demographs){
//     if (demograph!= null) console.log(sumOfPopulation += demograph.population);
// }
for(index = 0; index < demographs.length; index ++){
    for(index1 = 0; index1 < demographs[index].length; index1 ++){
        if(demographs[index][index1] != null){
            sumOfPopulation += demographs[index][index1].population;
        }
    }
}
console.log(sumOfPopulation);