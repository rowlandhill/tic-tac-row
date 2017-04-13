'use strict'

let turn = 'X'
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
const theBoard = $('td.square')

const changeAlert = (txt) => {
  const element = $('#alert')[0]
  $(element).text(txt)
}

const startGame = () => {
  changeAlert(turn + ' always starts first')
}
// when a square is clicked, check to see what is in the square
// if a turn has been played, change alert to pick another square
$('td.square').on('click', function () {
  if ($(this)[0].innerHTML === '') {
    $(this).text(turn)
    changeTurn()
  } else {
    changeAlert('pick another square!')
  }
})

const changeTurn = () => {
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  }
  changeAlert('it\'s ' + turn + '\'s turn now')
}

// $('.col-xs-4').on('click', function () {
//  if (this.textContent === '') {
//    $(this).text(turn)
//    gameArray[$(this).data('id')] = turn
//    checkWinner()
//  } else {
//    changeMessage('please, pick another square')
//  }
// })

const winnerCheck = function () {
  if ($('td.square')[0].innerHTML === $('td.square')[1].innerHTML && $('td.square')[1].innerHTML === $('td.square')[2].innerHTML && $('td.square')[0].innerHTML)
    // endGame()
    console.log('win!')
  else if ($('td.square')[3].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[5].innerHTML && $('td.square')[3].innerHTML)
     console.log(' wins!')
   else if ($('td.square')[6].innerHTML === $('td.square')[7].innerHTML && $('td.square')[7].innerHTML === $('td.square')[8].innerHTML && $('td.square')[6].innerHTML)
     console.log(' wins!')
   else if ($('td.square')[0].innerHTML === $('td.square')[3].innerHTML && $('td.square')[3].innerHTML === $('td.square')[6].innerHTML && $('td.square')[0].innerHTML)
     console.log(' wins!')
   else if ($('td.square')[1].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[7].innerHTML && $('td.square')[1].innerHTML)
     console.log(' wins!')
   else if ($('td.square')[2].innerHTML === $('td.square')[5].innerHTML && $('td.square')[5].innerHTML === $('td.square')[8].innerHTML && $('td.square')[2].innerHTML)
     console.log(' wins!')
   else if ($('td.square')[0].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[8].innerHTML && $('td.square')[0].innerHTML)
     console.log(' wins!')
   else if ($('td.square')[2].innerHTML === $('td.square')[4].innerHTML && $('td.square')[4].innerHTML === $('td.square')[6].innerHTML && $('td.square')[2].innerHTML)
     console.log(' wins!')
  changeTurn()
}

module.exports = {
  changeAlert,
  theBoard,
  changeTurn,
  startGame,
  winnerCheck
}
//
// let turn = 'X'
// const elementId = $('td.square')
//
// const changeAlert = (txt) => {
//   let element = $('#alert')[0]
//   $(element).text(txt)
//   console.log('this is the message ' + changeAlert)
// }
//
// const nextMove = (square) => {
//   if (elementId === '') {
//     square.elementId = turn
//     changeTurn()
//   } else {
//     changeAlert('pick another square, dummy!')
//   }
// }
//
// function changeTurn () {
//   if (turn === 'X') {
//     turn = 'O'
//   } else {
//     turn = 'X'
//   }
//   if (winnerCheck() === true) {
//     console.log('there is a winner')
//   } else {
//     changeAlert('it\'s ' + document.turn + '\'s turn now')
//   }
// }
//
// const winnerCheck = function () {
//   if (elementId[0].innerText === elementId[1].innerText && elementId[1].innerText === elementId[2].innerText && elementId[0].innerText)
//     // endGame()
//     console.log('win!')
//   else if (elementId[3].innerText === elementId[4].innerText && elementId[4].innerText === elementId[5].innerText && elementId[3].innerText)
//      console.log(' wins!')
//    else if (elementId[6].innerText === elementId[7].innerText && elementId[7].innerText === elementId[8].innerText && elementId[6].innerText)
//      console.log(' wins!')
//    else if (elementId[0].innerText === elementId[3].innerText && elementId[3].innerText === elementId[6].innerText && elementId[0].innerText)
//      console.log(' wins!')
//    else if (elementId[1].innerText === elementId[4].innerText && elementId[4].innerText === elementId[7].innerText && elementId[1].innerText)
//      console.log(' wins!')
//    else if (elementId[2].innerText === elementId[5].innerText && elementId[5].innerText === elementId[8].innerText && elementId[2].innerText)
//      console.log(' wins!')
//    else if (elementId[0].innerText === elementId[4].innerText && elementId[4].innerText === elementId[8].innerText && elementId[0].innerText)
//      console.log(' wins!')
//    else if (elementId[2].innerText === elementId[4].innerText && elementId[4].innerText === elementId[6].innerText && elementId[2].innerText)
//      console.log(' wins!')
    //  gameState = false
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

// const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// // THIS IS CODE THAT WAS WRITTEN BEFORE ENGINEFIX
// function startGame () {
//   document.turn = 'X'
//   changeAlert(document.turn + ' always gets to start.  sorry bruh')
// }
//
// function changeAlert (txt) {
//   document.getElementById('alert').innerText = txt
// }
//
// function nextMove (square) {
//   // if (gameState === false) {
//   //   changeAlert('Game over, man!')
//   // }
//   if (square.innerText === '') {
//     square.innerText = document.turn
//     changeTurn()
//   } else {
//     changeAlert('pick another square, dummy!')
//   }
// }
//
// function changeTurn () {
//   if (document.turn === 'X') {
//     document.turn = 'O'
//   } else {
//     document.turn = 'X'
//   }
//   if (winnerCheck() === true) {
//     console.log('there is a winner')
//   } else {
//     changeAlert('it\'s ' + document.turn + '\'s turn now')
//   }
// }
//
// // $(':gameboard')
// //   .map(function () {
// //     return this.innerText
// //   })
// //   .get()
//
// // const gameArray = ['', '', '', '', '', '', '', '', '']
// // const winningCombos = [
// //   [0, 1, 2],
// //   [3, 4, 5],
// //   [6, 7, 8],
// //   [0, 3, 6],
// //   [1, 4, 7],
// //   [2, 5, 8],
// //   [0, 4, 8],
// //   [2, 4, 6]
// // ]
// //
// const elementId = document.getElementsByClassName('square')
// //
// // const arrayReturn = function () {
// //   for (let i = 0; i < 8; i++)
// //     return elementId
// // }
// //
// // document.getElementById('gameboard').addEventListener('click', arrayReturn()
//
// const winnerCheck = function () {
//   if (elementId[0].innerText === elementId[1].innerText && elementId[1].innerText === elementId[2].innerText && elementId[0].innerText)
//     // endGame()
//     console.log('win!')
//   else if (elementId[3].innerText === elementId[4].innerText && elementId[4].innerText === elementId[5].innerText && elementId[3].innerText)
//      console.log(' wins!')
//    else if (elementId[6].innerText === elementId[7].innerText && elementId[7].innerText === elementId[8].innerText && elementId[6].innerText)
//      console.log(' wins!')
//    else if (elementId[0].innerText === elementId[3].innerText && elementId[3].innerText === elementId[6].innerText && elementId[0].innerText)
//      console.log(' wins!')
//    else if (elementId[1].innerText === elementId[4].innerText && elementId[4].innerText === elementId[7].innerText && elementId[1].innerText)
//      console.log(' wins!')
//    else if (elementId[2].innerText === elementId[5].innerText && elementId[5].innerText === elementId[8].innerText && elementId[2].innerText)
//      console.log(' wins!')
//    else if (elementId[0].innerText === elementId[4].innerText && elementId[4].innerText === elementId[8].innerText && elementId[0].innerText)
//      console.log(' wins!')
//    else if (elementId[2].innerText === elementId[4].innerText && elementId[4].innerText === elementId[6].innerText && elementId[2].innerText)
//      console.log(' wins!')
//     //  gameState = false
// }
//
// // const turn = document.turn
// // const moves = document.getElementById('gameboard').dataset.square
// //
// // function moves
//
// // moves.dataset.squares
//
// // have to create a function that will reassign array index values to whoever's turn it is (x or o)
//
// // const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
// //
// // $('data-square').click(function () {
// //   boardArray[moves.dataset.square] = turn
//
// // const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
