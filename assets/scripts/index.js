'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const gameLogic = require('./gamelogic')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  authEvents.addHandlers()
})

const gameLogic = require('./gamelogic.js')

console.log(gameLogic)
