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
  if (winnerCheck() !== true) {
    changeAlert('it\'s ' + document.turn + '\'s turn now')
  } else {
    changeAlert(document.turn + 'wins!')
  }
}

const elementId = document.getElementsByClassName('square')

const winnerCheck = function () {
  if (elementId[0].innerText === elementId[1].innerText && elementId[1].innerText === elementId[2].innerText && elementId[0].innerText)
    console.log(' wins!')
  else if (elementId[3].innerText === elementId[4].innerText && elementId[4].innerText === elementId[5].innerText && elementId[3].innerText)
    console.log(' wins!')
  else if (elementId[6].innerText === elementId[7].innerText && elementId[7].innerText === elementId[8].innerText && elementId[6].innerText)
    console.log(' wins!')
  else if (elementId[0].innerText === elementId[3].innerText && elementId[3].innerText === elementId[6].innerText && elementId[0].innerText)
    console.log(' wins!')
  else if (elementId[1].innerText === elementId[4].innerText && elementId[4].innerText === elementId[7].innerText && elementId[1].innerText)
    console.log(' wins!')
  else if (elementId[2].innerText === elementId[5].innerText && elementId[5].innerText === elementId[8].innerText && elementId[2].innerText)
    console.log(' wins!')
  else if (elementId[0].innerText === elementId[4].innerText && elementId[4].innerText === elementId[8].innerText && elementId[0].innerText)
    console.log(' wins!')
  else if (elementId[2].innerText === elementId[4].innerText && elementId[4].innerText === elementId[6].innerText && elementId[2].innerText)
    console.log(' wins!')
}
// this is an attempt to find the value in the table to add to an array.  i have
// not been able to find a way to do that, so I am writing code to just do it another
// way

// const myCell = document.getElementsByTagName('td')
//
// for (let i = 0; i <= myCell.length; i++) {
//   myCell[i].addEventListener('click', valueOnClick)
// }
//
// function valueOnClick () {
//   alert('Your value is ' + this.textContent)
// }

// const turn = document.turn
// const moves = document.getElementById('gameboard').dataset.square
//
// function moves

// moves.dataset.squares

// have to create a function that will reassign array index values to whoever's turn it is (x or o)

// const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//
// $('data-square').click(function () {
//   boardArray[moves.dataset.square] = turn
//   if (
//   boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2] && boardArray[0] > 0 ||
//   boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5] && boardArray[3] > 0 ||
//   boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8] && boardArray[6] > 0 ||
//   boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6] && boardArray[0] > 0 ||
//   boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7] && boardArray[1] > 0 ||
//   boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8] && boardArray[2] > 0 ||
//   boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8] && boardArray[0] > 0 ||
//   boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6] && boardArray[2] > 0

// ) {
//     alert(document.turn + 'wins!')
//   }
// })

// const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//
// //   board
// // [0, 1, 2]
// // [3, 4, 5]
// // [6, 7, 8]
//
//
// function winnerCheck () {
//   if (
//       boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2] && boardArray[0] > 0 ||
//       boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5] && boardArray[3] > 0 ||
//       boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8] && boardArray[6] > 0 ||
//       boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6] && boardArray[0] > 0 ||
//       boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7] && boardArray[1] > 0 ||
//       boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8] && boardArray[2] > 0 ||
//       boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8] && boardArray[0] > 0 ||
//       boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6] && boardArray[2] > 0
//
//     ) {
//     return true
//   } else {
//     return false
//   }
// }
//
// function lockBox () {
//
// }

// module.exports = {
//   startGame,
//   changeAlert,
//   nextMove,
//   changeTurn
// }
