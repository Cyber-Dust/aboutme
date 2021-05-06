'use strict';

let userScore = 0;

let userName = prompt('Welcome to my page! Here, you will learn ALL the ins and outs about me. What is your name?');

console.log('The users name is', userName);

alert('Nice to meet you ' + userName + '. Let\'s play a game!');

let knowMe = prompt('On a scale of 1-3, with 3 being the most interested, how bad do you want to get to know me?');


switch (knowMe){
  case '1':
    alert('Well, I implore you to give me a chance to explain myself..')
    break;
    case '2':
      alert('You\'re halfway there ' + userName + ', I\'d say that you should have probably picked 3!')
      break;
      case '3':
        alert('Great! It is my honor to tell you more. Come with me.')
        default:
          alert('Good. Let\'s keep going ' + userName + ' !')
          break;
}

alert(userName + '! Now, I am going to ask you a series of yes or no questions. Please respond to the best of your judgement.');

//QUESTION 1:
let origin = prompt('Was I born and raised in Nebraska? Please answer with a yes or no.')

console.log(origin);

let lowerCaseOrigin = origin.toLowerCase();


if (lowerCaseOrigin === 'yes' || lowerCaseOrigin === 'y') {
  alert('Well done, ' + userName + '! You definitely know where I come from :)');
  userScore++;
} else if (lowerCaseOrigin === 'no' || lowerCaseOrigin === 'n') {
  alert('Nope! I actually am a cornfed Nebraskan..')
} else {
  alert ('Are you sure you read the question all the way through ' + userName + "?")
}

//QUESTION 2:
let navy = prompt('Did I honarbly discharge from the United States Navy as a third class Petty Officer? Please answer with a yes or no.')

console.log(navy);

let lowerCaseNavy = navy.toLowerCase();


if (lowerCaseNavy === 'yes' || lowerCaseNavy === 'y') {
  alert('Well done, ' + userName + '! I was indeed a second class Petty Officer, good work! :)');
  userScore++;
} else if (lowerCaseNavy === 'no' || lowerCaseNavy === 'n') {
  alert('Close, but no cigar. I was a second class, not a third class..')
} else {
  alert ('Are you sure you read the question all the way through ' + userName + "?")
}

//QUESTION 3:
let school = prompt('Do I have 2 associates degrees? Please answer with a yes or no.')

console.log(school);

let lowerCaseSchool = school.toLowerCase();


if (lowerCaseSchool === 'yes' || lowerCaseSchool === 'y') {
  alert('Nice work, ' + userName + '! I do have 2 associates degrees! :)');
  userScore++;
} else if (lowerCaseSchool === 'no' || lowerCaseSchool === 'n') {
  alert('Close, but no cigar. I do have 2 associates degrees...')
} else {
  alert ('Are you sure you read the question all the way through ' + userName + "?")
}

//QUESTION 4:
let skate = prompt('Is one of my favorite passtimes ice skating? Please answer with a yes or no.')

console.log(skate);

let lowerCaseSkate = skate.toLowerCase();


if (lowerCaseSkate === 'yes' || lowerCaseSkate === 'y') {
  alert('Nope! I have no idea how to ice skate. I would rather spend my time reading.');
} else if (lowerCaseSkate === 'no' || lowerCaseSkate === 'n') {
  alert('That\'s right, ' + userName + '! Looks like you know me pretty well.');
  userScore++;
} else {
  alert ('Are you sure you read the question all the way through ' + userName + "?")
}

//QUESTION 5:
let goal = prompt('Is one of my goals in life to become an Architect? Please answer with a yes or no.')

console.log(goal);

let lowerCaseGoal = goal.toLowerCase();


if (lowerCaseGoal === 'yes' || lowerCaseGoal === 'y') {
  alert('Nope! I have no intention to become an Architect. Pretty rad route though, I respect it.');
} else if (lowerCaseGoal === 'no' || lowerCaseGoal === 'n') {
  alert('That\'s right, ' + userName + '! Looks like you know me pretty well.');
  userScore++;
} else {
  alert ('Are you sure you read the question all the way through ' + userName + "?")
}

//QUESTION 6:
//Loop City
let myNum = 34;

for (let i = 0; i < 4 ; i++) {
  let userGuess = prompt('Pick a number between 1-50!🌀');
  let numGuess = parseInt(userGuess);
  if (numGuess === myNum) {
    alert('Superb! You did it, 34 is the number!');
    userScore++;
    break;
  } else if (numGuess > myNum) {
    alert('Too high. Try again.');
  } else if (numGuess < myNum) {
    alert('Too low. Try again.');
  }
}

//QUESTION 7:
//challenge: create a list of your fav moveis. Give the user 5 guesses to figure out one of the movies from your list. If  the user guesses correctly tell them they are correct and stop giving them more chances to guess. If they guess incorectly, let them know and prompt them to guess again.
//user guesses a movie
//we check all of the movies in our array - if there is a match we will let them know and NOT ask them to guess again
//if there is not a match we will tell them they didn't get it and ask them to guess again (up to five times)

// needs:
// a list of movies aka an array
// a variable set to a number of guesses 
// we are going to need a flag for when they get it right

let myFavMovies = ['drive', 'rosemary\'s baby', 'interstellar', 'goodfellas', 'school of rock', 'tron legacy', 'the graduate', 'twin peaks', 'cat on a hot tin roof', 'there will be blood'];

let counter = 6;
let rightAnswer = false;
while (rightAnswer === false && counter > 0) {
    let question = 'Guess one of my favorite movies? Choose from the following:'
    let choices = ' \n 1. drive \n 2. rosemary\'s baby \n 3. interstellar \n 4. goodfellas \n 5. school of rock \n 6. tron legacy \n 7. the graduate \n 8. twin peaks \n 9. cat on a hot tin roof \n 10. there will be blood \n '
    // they get in the loop and I ask them the question
    let userGuess = prompt(question + choices).toLowerCase();
    // add method (.toLowerCase()) to end of prompt
    // I check thier guess against my list of movies
 
   for (let i = 0; i < myFavMovies.length; i++) {
     console.log(myFavMovies[i]);
     if (userGuess === myFavMovies[i]) {
     // if they get it right I tell them
     alert('Nice Job! You are correct!');
     userScore++;
     //userscore equals userscore+1
     // change they got it right to true
     rightAnswer = true;
    }
   }

   if (rightAnswer === false) {
      alert('That is not the correct answer. Guess again!');
   }
    counter--;
}

alert('Great work '+ userName + '! You got ' + userScore + ' out of 7! You may now proceed to the rest of the site. ENJOY! ⭐️')



// Create a var to hold user score
// Set to 0
// After correct statements, put userscore +=1



