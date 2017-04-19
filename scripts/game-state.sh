!/bin/bash

curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": 1,
    "cells": ["","","","","","","","",""],
    "over":false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
      },
    "player_o": {
      "id": 3,
      "email":
      "dna@dna.com"
    }
  }
}'

echo
