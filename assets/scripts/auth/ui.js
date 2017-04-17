'use strict'

const store = require('../store.js')
const gameLogic = require('../gamelogic.js')

const signUpSuccess = (data) => {
  console.log(data)
  // $('#sign-up').addClass('hidden')
  gameLogic.changeUiMessage('great job! now please sign in')
}

const signUpFailure = (error) => {
  console.log(error)
  gameLogic.changeUiMessage('user name taken, or passwords didn\'t match - try again!')
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  gameLogic.changeUiMessage('what would you like to do? you can create a game, check your stats, check previous games or change your password.  the possibilities are unlimited, as long as unlimited === 4')
  // $('#sign-in').addClass('hidden')
  // $('#change-password').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#get-all-games').removeClass('hidden')
  // $('#create-game').removeClass('hidden')
  // if ($('#sign-up').not('hidden')) {
  //   $('#sign-up').addClass('hidden')
  // }
}

const signInFailure = (error) => {
  console.error(error)
  gameLogic.changeUiMessage('name or password don\'t match - try again!')
}

const changePasswordSuccess = (response) => {
  console.log('response is ', response)
  gameLogic.changeUiMessage('success! don\'t forget your new password!')
}

const changePasswordFailure = (error) => {
  console.error(error)
  gameLogic.changeUiMessage('old password typed incorrectly, please try again!')
}

const signOutSuccess = (response) => {
  console.log('response is', response)
  gameLogic.changeUiMessage('thanks for playing! please log in again if you\'d like to play again!')
  // $('#sign-up').removeClass('hidden')
  // $('#sign-in').removeClass('hidden')
  // $('#change-password').addClass('hidden')
  // $('#sign-out').addClass('hidden')
  // $('#get-all-games').addClass('hidden')
  // $('#container').addClass('hidden')
  // $('create-game').addClass('hidden')
}

const signOutFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
