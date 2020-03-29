const express = require('express')
const Router = require('express-promise-router')
const port = 8080
const cors = require('cors')

const app = express()
app.use(cors())

var choreArray = [
        'Exhaust Fan/Stove/Microwave',
        'Floors/Counters/Dusting',
       'Dishwasher, Sink Clean',
        'Garbage/Compost, Recycling'
]

const rotateChores = () => {
    var tmp = choreArray[0];
    for (var i = 1; i < choreArray.length; i++) {
        choreArray[i] = [tmp, tmp=choreArray[i]][0]
    }
    choreArray[0] = tmp;
}

app.get('/chores', (req, res) => {
  res.send(choreArray)
})

app.listen(port, () => {
    console.log("Chore Schedule Initialized")
    setInterval(rotateChores, 6.048e8)
})


