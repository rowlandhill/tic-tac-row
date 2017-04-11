'use strict'

function startGame () {
  document.turn = 'X'
  changeAlert(document.turn + ' always gets to start.  sorry bruh')
}

function changeAlert (txt) {
  document.getElementById('alert').textContent = txt
}

function nextMove (square) {
  if (square.textContent === '') {
    square.textContent = document.turn
    changeTurn()
  } else {
    changeAlert('pick another square, dummy!')
  }
}

function changeTurn () {
  if (document.turn === 'X') {
    document.turn = 'O'
  } else {
    document.turn = 'X'
  }
  changeAlert('it\'s ' + document.turn + '\'s turn now')
}

module.exports = {
  startGame,
  changeAlert,
  nextMove,
  changeTurn
}
