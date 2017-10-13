'use strict'
const fs = require('fs')
const path = './scores.txt'

const scoreText = fs.readFileSync(path, 'utf-8')
const scoreArray = scoreText.split('\n')
const totals = {}
let winner = ''
let winningScore = 0
scoreArray.forEach(function(e){
  e = e.split(',')
  let total = 0
  for(let i = 1; i < e.length; i++){
    total += Number(e[i])
  }
  totals[e[0]] = total
  if(total > winningScore){
    winner = e[0]
    winningScore = total
  }
})
console.log(winner)
