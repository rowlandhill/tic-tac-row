'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // console.log('event fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // console.log('event fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  // console.log('pass change')
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // console.log('event fired')
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetAllGames = function (event) {
  console.log(data)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getAllGames(data)
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
}

const onCreateGame = function (event) {
  // console.log(data)
  const data = getFormFields(event.target)
  event.preventDefault()
  $('#container').removeClass('hidden')
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetId = function (event) {
  // console.log(data)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getId(data.game.id)
    .then(ui.getIdSuccess)
    .catch(ui.getIdFailure)
}

const onJoinGame = function (event) {
  // console.log(data)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.joinGame(data)
    .then(ui.joinGameSuccess)
    .catch(ui.joinGameFailure)
}

const onUpdateGame = function (event) {
  // console.log(data)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.updateGame(data)
    .then(ui.gameStateSuccess)
    .catch(ui.gameStateFailure)
}

// const myTabs = () => {
//   $('#myTabs a[href="#sign-up"]').tab('show')
//   $('#myTabs a[href="#sign-in"]').tab('show')
//   $('#myTabs a[href="#change-password"]').tab('show')
//   $('#myTabs a[href="#get-all-games"]').tab('show')
//   $('#myTabs a[href="#get-id"]').tab('show')
//   $('#myTabs a[href="#sign-out"]').tab('show')
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#get-all-games').on('submit', onGetAllGames)
  $('#create-game').on('submit', onCreateGame)
  $('#get-id').on('submit', onGetId)
  $('#join-game').on('submit', onJoinGame)
  $('td-square').on('click', onUpdateGame)
}

module.exports = {
  addHandlers
}
