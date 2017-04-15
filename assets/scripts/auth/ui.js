'use strict'

const store = require('../store.js')
const gameLogic = require('../gamelogic.js')

const signUpSuccess = (data) => {
  gameLogic.changeUiMessage('great job! now please sign in')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  console.log('response is ', response)
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  console.log('response is', response)
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
