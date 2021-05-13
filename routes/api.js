const router = require('express').Router()
const mongoose = require('mongoose')

const db = require('../models')

router.get("/workouts", async (req,res) => {
    db.Workout.find({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports=router