#!/bin/bash

curl --include --request GET http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": 1,
    "cells": ["o","x","o","x","o","x","o","x","o"],
    "over": true,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": {
      "id": 3,
      "email": "dna@dna.com"
    }
  }
}'

echo
