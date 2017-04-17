'use strict'

const apiUpdate = require('../scripts/auth/api.js')

let turn = 'X'
let win = false
let moves = 0
let gameArray = ['', '', '', '', '', '', '', '', '']
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const changeAlert = (txt) => {
  const element = $('#alert')[0]
  $(element).text(txt)
}

const changeUiMessage = (txt) => {
  const uimessage = $('#ui-message')[0]
  $(uimessage).text(txt)
}

const startGame = () => {
  changeAlert(turn + ' always starts first')
}
// when a square is clicked, check to see what is in the square
// if a turn has been played, change alert to pick another square

$('td.square').on('click', function () {
  if ($(this)[0].innerHTML === '') {
    $(this).text(turn)
    gameArray[($(this).data('square'))] = turn
    console.log(gameArray)
    apiUpdate.gameState(gameArray, turn, win)
    winnerCheck()
  } else {
    changeAlert('pick another square, dummy!')
  }
})

const endGame = () => {
  if (moves === 9 && win === false)
    gameDraw()
  else {
    changeAlert(turn + ' wins!')
    $('#container').addClass('hidden')
    // $('td.square').off('click')
  }
  apiUpdate.gameState(gameArray, turn, win)
}

const resetBoard = () => {
  startGame()
  gameArray = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  moves = 0
  win = false
  $('#container').removeClass('hidden')
  $('td.square').on('click', startGame())
  $('td.square').text('')
}

const gameDraw = () => {
  changeAlert('a tie? boooooo! go home and think about what you\'ve done.')
  $('#container').removeClass('hidden')
  // $('td.square').unbind('click')
}

const changeTurn = () => {
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  }
  moves += 1
  console.log(moves)
  changeAlert('it\'s ' + turn + '\'s turn now')
}

const winnerCheck = function () {
  if ($('td.square')[0].innerHTML === $('td.square')[1].innerHTML && $('td.square')[1].innerHTML === $('td.square')[2].innerHTML && $('td.square')[0].innerHTML)
    win = true
  else if ($('td.square')[3].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[5].innerHTML && $('td.square')[3].innerHTML)
    win = true
  else if ($('td.square')[6].innerHTML === $('td.square')[7].innerHTML && $('td.square')[7].innerHTML === $('td.square')[8].innerHTML && $('td.square')[6].innerHTML)
    win = true
  else if ($('td.square')[0].innerHTML === $('td.square')[3].innerHTML && $('td.square')[3].innerHTML === $('td.square')[6].innerHTML && $('td.square')[0].innerHTML)
    win = true
  else if ($('td.square')[1].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[7].innerHTML && $('td.square')[1].innerHTML)
    win = true
  else if ($('td.square')[2].innerHTML === $('td.square')[5].innerHTML && $('td.square')[5].innerHTML === $('td.square')[8].innerHTML && $('td.square')[2].innerHTML)
    win = true
  else if ($('td.square')[0].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[8].innerHTML && $('td.square')[0].innerHTML)
    win = true
  else if ($('td.square')[2].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[6].innerHTML && $('td.square')[2].innerHTML)
    win = true
  else (
    changeTurn()
  )
  if (win === true || moves === 9) {
    return endGame()
  }
}

// this needs to be uncommented when you get to UI

// $('#reset').on('submit', function () {
//   event.preventDefault()
//   console.log('button test')
//   jQuery('td.square').html('')
//   jQuery('#alert').html('')
//   $('td.square').bind()
// })

module.exports = {
  changeAlert,
  changeTurn,
  startGame,
  winnerCheck,
  endGame,
  gameDraw,
  changeUiMessage,
  resetBoard
}
