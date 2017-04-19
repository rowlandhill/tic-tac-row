'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  // console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  // console.log('inside changePassword, data is', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  // console.log('sign out fired', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllGames = () => {
  // console.log('get index', data)
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = (data) => {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getId = () => {
  event.preventDefault()
  console.log('AHHHHHHH ' + store.game.id)
  // put a console log here for something
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const joinGame = (data) => {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (gameArray, turn, win) => {
  console.log(gameArray, turn, win)
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: gameArray,
          value: turn
        },
        over: win
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getAllGames,
  createGame,
  getId,
  joinGame,
  updateGame
}
