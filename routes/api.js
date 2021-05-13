const router = require('express').Router()

router.get("/", async (res,req) => {

    try{
        res.json({success})
    }
    catch{
        res.json({error})
    }
    
})

module.exports=router