

const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect =  document.getElementById('difficulty')
 
// list of words
const words = [
    "india",
    "great",
    "monkey",    
    "apple",
    "banana",
    "carrot",
    "dog",
    "elephant", 
    "fish",
    "grape",
    "house",
    "ice",
    "jungle",
    "kite",
    "lemon",
    "mountain",
    "noodle",
    "ocean",
    "penguin",
    "quilt",
    "rainbow",
    "sunshine",
    "tiger",
    "umbrella",
    "violin",
    "waterfall",
    "xylophone",
    "yacht",
    "zebra",
    "beach",
    "computer",
    "dolphin"
  ];
  
//   init word
let randomWord;

// score
let score = 0;

// init time
let time = 10;

// focus on text on start
text.focus()


// random word generating function
function getRandomWord(){
    console.log(words[Math.floor(Math.random() * words.length)]);
    return words[Math.floor(Math.random() * words.length)]
}

// console.log(getRandomWord());

// add word to dom
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM()

// score update
function updateScore(){
      score = score + 5;
      scoreEl.innerHTML = score;
}

// start counting down
const timeInterval = setInterval(updateTime, 1000)

// update time
function updateTime(){
    // console.log(1);
    time--;
    timeEl.innerHTML = time + 's';

    if(time === 0){
        clearInterval(timeInterval);
        // end the game
        gameOver();

    }
}

// game over , show and screen
function gameOver(){
  endgameEl.innerHTML = `
      <h1>Time out </h1>
      <p> You scored ${score} </p>
      <button onclick= "location.reload()">Play again</button>
   `
   endgameEl.style.display = "flex"
}

// addWordToDOM();

text.addEventListener('input', e => {
     const insertedText = e.target.value;

     if(insertedText === randomWord){
        addWordToDOM();
        updateScore();

        e.target.value = ""

        // setting difficulty level
        if(difficulty === 'hard'){
            time +=2;
        }
        else if(difficulty === 'medium'){
            time +=3;
        }
        else{ 
            time +=5;
        }

        updateTime()
     }

});

// setting btn click

settingsBtn.addEventListener('click', ()=>{
    settings.classList.toggle('hide');
})

// settings select
let difficulty;

difficulty = localStorage.getItem('difficulty') !== null ? 
localStorage.getItem('difficulty') : 'medium'

// set difficulty select value

difficultySelect.value = localStorage.getItem('difficulty') !== null ? 
localStorage.getItem('difficulty') : 'medium'

settingsForm.addEventListener('change', (e) => {
     difficulty = e.target.value;
     console.log(difficulty);
     localStorage.setItem('difficulty', difficulty)

})




  