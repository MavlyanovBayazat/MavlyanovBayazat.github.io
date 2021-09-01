let $start = document.querySelector('#start')
let $start15 = document.querySelector('#start15')
let $start30 = document.querySelector('#start30')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let isGameStarted = false
let score = 0
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let mySong = document.getElementById('mySong')

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)


function startGame() {
  score = 0 
  isGameStarted = true
  // $game.style.backgroundColor = '#fff'
  $start.classList.add('hide')
  $start15.classList.add('hide')
  $start30.classList.add('hide')
  setGameTime()
  timer()
  renderBox()
  // $resultHeader.classList.add('hide')
  // $timeHeader.classList.remove('hide')
  $gameTime.setAttribute('disabled','true')
  $gameTime.setAttribute('disabled','false')
  mySong.play();
}

function endGame(){
  isGameStarted = false
  $start.classList.remove('hide')
  $start15.classList.remove('hide')
  $start30.classList.remove('hide')
  $game.style.backgroundColor = '#ccc'
  $game.innerHTML = ''
  // $timeHeader.classList.add('hide')
  // $resultHeader.classList.remove('hide')
  $result.textContent = ' '+ score
}

function timer(){
  let interval = setInterval(function(){
    let sec = parseFloat($time.textContent)
    if(sec <= 0.1){
      clearInterval(interval)
      endGame()
      mySong.pause();
    } 
    $time.textContent =  (sec - 0.1).toFixed(1)
  },100)
}
let $gameTime = document.querySelector('#game-time')


$gameTime.addEventListener('input',setGameTime)

function setGameTime(){
$time.textContent = parseFloat($gameTime.value).toFixed(1)
}

function handleBoxClick(event) {
  if (event.target.dataset.box) {
    score++
    document.getElementById("result").innerHTML = 'Очки:' + score;
    renderBox()
  }
}


function renderBox() {
  if(isGameStarted){
  $game.innerHTML = ''
  let boxSize = getRandom(20,50)
  let box = document.createElement('div')
  let gameSize = 450
  let left = getRandom(0,gameSize - boxSize)
  let top = getRandom(0,gameSize - boxSize)
  box.style.width = box.style.height = boxSize + 'px'
//   box.style.backgroundColor = 'black'
  box.style.position = 'absolute'
  box.style.top = top + 'px'
  box.style.left = left + 'px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box','true')

  $game.insertAdjacentElement('afterbegin',box)  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
    }
    let chisloX = getRandomInt(260)+'px'
    let chisloY = getRandomInt(260)+'px'
    let rgb1 = getRandomInt(250)
    let rgb2 = getRandomInt(250)
    let rgb3 = getRandomInt(250)
    
    box.style.backgroundColor= "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")"

  }
}


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function btn15() {
  document.getElementById('game-time').value='15';
  startGame()

}

function btn30() {
  document.getElementById('game-time').value='30';
  startGame()

}