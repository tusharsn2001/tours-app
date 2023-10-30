const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fs = require('fs')
const Tour = require('./../../models/tourModel')


dotenv.config({ path: './config.env' })

// database
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(con => {
    console.log('db connection successful')
}).catch(err => console.error('db connection failed', err));

// Read json file

const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('data succesfullt loaded')
    } catch (error) {
        console.log(error)
    }
}

// delete all data from collections

const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('data succesfully deleted')
        process.exi
    } catch (error) {
        console.log(error)
    }
}

if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] == '--delete') {
    deleteData()
}

console.log(process.argv)