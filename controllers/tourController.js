
const Tour = require('./../models/tourModel')


// const tours = JSON.parse(fs.readFileSync('D:\\D-2\\javascript course\\Back-end\\tours-app\\dev-data\\data\\tours-simple.json'))

// to validate body
// exports.checkBody = (req, res, next) => {
//     if (!req.body.name || !req.body.price) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Missing name or price'
//         })
//     }
//     next();
// }

// get all tours
exports.getTours = async (req, res) => {
    // when we don't pass anything into it, then it will
    // return all the documents in that collection.
    try {
        const tours = await Tour.find()
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }

        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

}




// get one tour
exports.getTour = async (req, res) => { // for optional parameter add ? after it
    try {

        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                tour: tour
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }




}

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);


        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

    // res.send('Done')
}
exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                tour: tour
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

// deleting documents

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}
