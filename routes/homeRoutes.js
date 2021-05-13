const router = require('express').Router()
const path = require('path')

// sendFile will go here
router.get('/', function(req, res) {

    try{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }

    catch{
        res.json({error})
    }

});

router.get('/stats', async (req, res) => {
    
    try{
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    }

    catch{
        res.json({error})
    }

})

router.get('/exercise', async (req, res) => {
    
    try{
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    }

    catch{
        res.json({error})
    }

})

module.exports=router