// Creating a variables & declearing a variable.

// let carName = 'Audi';
// let modelNo = 1200;
// let carCondition = True; // True = Good Condition, False = Bad Condition
// console.log(carName);
// console.log(modelNo);
// console.log(carCondition);
// console.log('Anuraj Dwivedi');


let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Calculate totalShowTime here
// =====================================
let episodeTime = 45;
let commercialTime = 5;

let totalEpisodeTime = episodeTime + commercialTime;

let totalNumberOfSeasonsandEpisodes = numberOfEpisodes * numberOfSeasons;

let totalShowTime = totalEpisodeTime * totalNumberOfSeasonsandEpisodes;

// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`