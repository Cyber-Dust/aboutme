'use strict';

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
} else {
  alert ('Are you sure you read the question all the way through ' + userName + "?")
}

//QUESTION 6:
//Loop City
let numberGame = prompt('Guess a number from 1-50 🌀')




alert('Great work '+ userName + '! You may now proceed to the rest of the site. ENJOY! ⭐️');






