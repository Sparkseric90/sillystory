//This allows you to use a custom name
const customName = document.getElementById('customname');
//This randomizes your story
const randomize = document.querySelector('.randomize');
//This is what gets posted to the <p>element part of the HTML
const story = document.querySelector('.story');

//Takes an array and returns it as one of the items stored inside the array at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//This text string contains the following
//Variable: storyText
//Array: insertX, insertY, insertZ: inserts what every word or phrase into the varible when its called and random for its called section

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House']
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']

//This creates a randomize variable, so when the button is clicked, the results fuction is ran
randomize.addEventListener('click', result);


//creates variable for newStory, its needed so we can create a new random story each time the button is pressed
function result() {
    let newStory = storyText;

//calls the function and gets it to return one random string out of each respective array
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    //Whenever a newStory is called, it is made equal to itself but with substitutions made
    //so each time the button is pressed, these place holders are each replaced with a random silly string.
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
    

//adds another string replacement method to replace the name "bob" with the name variable.
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

//Here we're checking to see if the radio button is checked between US or UK. If selected with UK,
//it then does the math conversions for weight and temperature and converts them to Stone, and Centigrade"
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature = Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
