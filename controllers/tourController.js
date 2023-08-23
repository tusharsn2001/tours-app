const fs = require('fs');

const tours = JSON.parse(fs.readFileSync('D:\\D-2\\javascript course\\Back-end\\tours-app\\dev-data\\data\\tours-simple.json'))

exports.getTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
}

//post api



exports.getTour = (req, res) => { // for optional parameter add ? after it
    console.log(req.params)
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid id'
        })
    }

    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour
        }
    })

}

exports.createTour = (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour)
    fs.writeFile('D:\\D-2\\javascript course\\Back-end\\tours-app\\dev-data\\data\\tours-simple.json', JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'succes',
            data: {
                tour: newTour
            }
        })
    })
    // res.send('Done')
}

exports.updateTour = (res, req) => {


    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}

exports.deleteTour = (res, req) => {


    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}
