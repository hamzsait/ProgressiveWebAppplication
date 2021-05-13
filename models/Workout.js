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
                required:"Please enter type of workout"
            },
            name: {
                type:String,
                required:"Please enter name of exercise"
            },
            duration: {
                type: Number,
                required: "Please enter duration of workout"
            },
            weight:{
                type:Number,
                required: "Please enter weight of workout"
            },
            reps:{
                type:Number,
                required: "Please enter number of reps performed"
            },
            sets:{
                type:Number,
                required:"Please enter number of sets performed"
            }
        }
    ]

})

const Workout = mongoose.model("Workout", workOut);

module.exports = Workout