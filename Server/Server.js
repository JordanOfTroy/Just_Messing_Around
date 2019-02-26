require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      ctrl = require('./Controller'),
      checkUserSession = require('./CheckUserSession'),
      app = express(),
      {
        SESSION_SECRET,
        CONNECTION_STRING,
        SERVER_PORT
      } = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())

app.use(checkUserSession)

app.use(express.static(`${__dirname}/../build`))

//  ********** Endpoints go here ************

// --- GET ---

// --- POST ---
app.post(`/api/formdata`, ctrl.formData)

// --- PUT ---

// --- DELETE ---

// ******************************************

app.listen(SERVER_PORT, () => {
  console.log(`The magic is happening on PORT: ${SERVER_PORT}`)
})
