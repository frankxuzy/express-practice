const request = require('supertest')
const server = require('../server')

test('/compliment respond with a string', () => {
  request(server)
    .get('/compliment')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/beautiful/)
    })
})

test('/get-name test post request', done => {
  request(server)
    .post('/get-name')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({fname: 'Sean'})
    .send({lname: 'Xu'})
    .expect(302)
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/\?fname=Sean&lname=Xu/)
      done()
    })
})
