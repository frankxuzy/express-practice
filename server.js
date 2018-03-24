const express = require('express')
const path = require('path')
const bodyPaser = require('body-parser')
const server = express()

server.use(bodyPaser.urlencoded({extended: false}))

server.use(express.static('public'))

server.get('/compliment', (req, res) => {
  res.send(`<h1>You are beautiful!</h1>`)
})

// server.get('/profile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'silvia.html'))
// })
server.get('/profile', (req, res) => {
  const name = req.query.name
  if (name === 'silvia') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  }
})

server.get('/profiles/:id', (req, res) => {
  const profileID = req.params.id
  if (profileID === '1') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  } else if (profileID === '2') {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  }
})

server.get('/named-compliment', (req, res) => {
  const fname = req.query.fname
  const lname = req.query.lname
  res.send(`<h1>${fname} ${lname}, You are a good boy!</h1>`)
})

server.post('/get-name', (req, res) => {
  const fname = req.body.fname
  const lname = req.body.lname
  res.redirect(`/named-compliment?fname=${fname}&lname=${lname}`)
})

server.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, './blogs/index.html'))
})

server.get('/blogs/:name', (req, res) => {
  const blogName = req.params.name
  res.sendFile(path.join(__dirname, `./blogs/blog/${blogName}`))
})
module.exports = server
