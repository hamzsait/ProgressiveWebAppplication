const router = require("express").Router()
const path = require("path")
router.use("/", require("./homeRoutes.js"))
router.use("/api", require("./api"))

module.exports= router 