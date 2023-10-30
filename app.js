const express = require('express');

const morgan = require('morgan')

const app = express();

const tourRouter = require('./routes/toursRoutes')
const userRouter = require('./routes/userRoutes')

// middleware 
app.use(express.json())

// custom middleware
app.use((req, res, next) => {
    console.log('hello from the middleware...')
    next();

});
app.use(morgan('dev'))

app.use(express.static('./public'))




// routes

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)


module.exports = app

