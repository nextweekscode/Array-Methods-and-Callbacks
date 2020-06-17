import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//A
const homeTeam = [];
fifaData.forEach(function(element){
 if (element["Year"]===2014){
    return homeTeam.push(element["Home Team Name"]);
 }
});
console.log(homeTeam);

//B
const awayTeam = [];
fifaData.forEach(function(element){
    if (element["Year"]===2014){
    return awayTeam.push(element["Away Team Name"]);
    }
});
console.log(awayTeam);

//C
const homeTeamGoals = [];
fifaData.forEach(function(element){
    if (element["Year"]===2014){
    return homeTeamGoals.push(element["Home Team Goals"]);
    }
});
console.log(homeTeamGoals);

//D
const awayTeamGoals = [];
fifaData.forEach(function(element){
    if (element["Year"]===2014){
    return awayTeamGoals.push(element["Away Team Goals"]);
    }
});
console.log(awayTeamGoals);

//E 

const winningTeam = [];
fifaData.forEach(function(element){
    if (element["Year"]===2014 && element["Stage"]==="Final"){
        return winningTeam.push(element["Win conditions"]);
    }

});
console.log(winningTeam);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
// const onlyFinals = [];
// function getFinals(data) {
//   data.find(function(element){
//      if( data.stage === "Final")
//       onlyFinals.push(data.stage)
// });
// }

// console.log(getFinals(fifaData));

const getFinals = (data) => data.filter(function(item){
    if(item.Stage === "Final"){
        return item.Stage
    };
})
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

const getYears = (callback) => callback.map(function(item){
    return item.Year
    
});

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

const getWinners = (callback) => callback.map(function(item){
  if(item["Home Team Goals"] > item["Away Team Goals"]){
      return item["Home Team Name"]
  }
  else (item["Home Team goals"] < item['Away Team Goals'])
      return item["Away Team Name"]
  



 });
 console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2, data){
    const winnersYears = [];
    const years = callback2(data);
    const winners = callback1(data);
    for (let i = 0; i < 20; i++){
        winnersYears.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    return winnersYears;
};
console.log(getWinnersByYear(getWinners, getYears, fifaData));
 
// function getWinnersByYear(func1, func2){
//     const result = [];
//     const winners = func1;
//     const years = func2;
//     for (let i = 0; i< 20; i++) {
//         result.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
//     }
//     return result;
//  };

// function getWinnersByYear(country, year, data) {
//     const country = getWinners(getFinals, data);
//     const year = getYears(getFinals, data);
//     const allWinners = [];
//     getFinals(data).forEach((item, i) =>{
//         allWinners.push(`In ${year[i]}, ${country[i]} won the world cup!`)
//     });
//     return allWinners;
// };
// console.log(getWinnersByYear(getWinners, getYears, fifaData))

//console.log(getWinnersByYear(getWinners(getFinals(fifaData))),(getYears(getFinals(fifaData))));




/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

const getAverageGoals = (data) => data.reduce(function(accumulator, item){
    return (accumulator + item["Home Team Goals"]) / item.length;
    
   



},0);

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(/* code here */) {

//     /* code here */

// };

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {

//     /* code here */

// };

// getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// };

// badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
