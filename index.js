var wins = 0;
var losses = 0;
let rock = document.getElementById('rock');
rock.addEventListener("click", function(){
  rock.style.border = '4px solid blue';
  computerPlays('rock');
});
let paper = document.getElementById('paper');
paper.addEventListener("click", function(){
  paper.style.border = '4px solid blue';
  computerPlays('paper');
});
let scissors = document.getElementById('scissors');
scissors.addEventListener("click", function(){
  scissors.style.border = '4px solid blue';
  computerPlays('scissors');
});


function computerPlays(choice) {
  let compuerDice = getRandomInt(0, 3)
  if (compuerDice === 0) {
    compuerDice = 'rock';
    rock.style.border = '4px dotted red'
    if (choice === 'paper') {
      win();
    } else if (choice === 'rock') {
      tie();
    } else {
      loss();
    }
  } else if (compuerDice === 1) {
    compuerDice = 'paper';
    paper.style.border = '4px dotted red';
    if (choice === 'scissors') {
      win();
    } else if (choice === 'paper') {
      tie();
    } else {
      loss();
    }
  } else if (compuerDice === 2) {
    compuerDice = 'scissors';
    scissors.style.border = '4px dotted red';
    if (choice === 'rock') {
      win();
    } else if (choice === 'scissors') {
      tie();
    } else {
      loss();
    }
  } else {
    console.log('Error compuerDice: ', compuerDice)
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function win(){
  setTimeout(function(){
    wins++;
    if (wins > 4) {
      document.getElementById('outcomeText').innerHTML = 'YOU WIN THE GAME!'
      document.getElementById('outcomeText').style.color = 'blue'
      wins = 0;
      losses = 0;
      document.getElementById('winScore').innerHTML = wins
      document.getElementById('lossScore').innerHTML = losses
      setTimeout(function() {
        window.open("http://lmgtfy.com/?q=I+need+something+better+to+do+help+me");
      }, 1000)
    }
    document.getElementById('winScore').innerHTML = wins
    document.getElementById('outcomeText').innerHTML = 'Win!'
    document.getElementById('outcomeText').style.color = 'blue'
    document.getElementById('winHighlight').style.color = 'blue'
    document.getElementById('winScore').style.color = 'blue'
  }, 1000)
  reset();
}

function tie(){
  setTimeout(function(){
    document.getElementById('outcomeText').innerHTML = 'Tie!'
    document.getElementById('outcomeText').style.color = 'yellow'
  }, 1000)
  reset();
}

function loss(){
  setTimeout(function(){
    losses++;
    if (losses > 4) {
      document.getElementById('outcomeText').innerHTML = 'YOU LOST THE GAME!'
      document.getElementById('outcomeText').style.color = 'red'
      wins = 0;
      losses = 0;
      document.getElementById('winScore').innerHTML = wins
      document.getElementById('lossScore').innerHTML = losses
      reset();
      return;
    }
    document.getElementById('lossScore').innerHTML = losses
    document.getElementById('outcomeText').innerHTML = 'Loss!'
    document.getElementById('outcomeText').style.color = 'red'
    document.getElementById('lossScore').style.color = 'red'
    document.getElementById('lossHighlight').style.color = 'red'
  }, 1000)
  reset();
}

function reset(){
  setTimeout(function(){
    rock.style.border = '0px';
    paper.style.border = '0px';
    scissors.style.border = '0px';
    document.getElementById('outcomeText').innerHTML = 'Play again!'
    document.getElementById('outcomeText').style.color = 'green'
    document.getElementById('lossScore').style.color = 'white'
    document.getElementById('winScore').style.color = 'white'
    document.getElementById('winHighlight').style.color = 'white'
    document.getElementById('lossHighlight').style.color = 'white'
  }, 1500)
}

function ani(selector) {
  document.getElementById(selector).className  = 'tada'
  setTimeout(function() {
    document.getElementById(selector).className  = 'pick'
  } , 1000)
}
