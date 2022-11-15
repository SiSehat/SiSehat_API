const express = require('express')
const { addObat } = require('../controller/obatHandler.js')

const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200);
    res.send({
        message: 'Hello World'
    })
})

// obat
router.post('/drug', addObat)
// router.get('/drugs', )
// router.get('/drugs/:id', getDetailDrug)


module.exports = {routes: router}