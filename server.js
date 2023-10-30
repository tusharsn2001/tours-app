const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
const port = 3001;

dotenv.config({ path: './config.env' })

// database
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(con => {
    console.log('db connection successful')
}).catch(err => console.error('db connection failed', err));



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})