const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workOut = new Schema({

    day:{
        type:Date,
        default: new Date()
    },
    exercises: [
        {
            type:{
                type:String,
            },
            name: {
                type:String,
            },
            duration: {
                type: Number,
            },
            weight:{
                type:Number,
            },
            distance:{
                type:Number
            },
            reps:{
                type:Number,
            },
            sets:{
                type:Number,
            }
        }
    ]

})

const Workout = mongoose.model("Workout", workOut);

module.exports = Workout