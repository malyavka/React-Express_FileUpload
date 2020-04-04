const router = require('express').Router();
const db = require('../db/index');
module.exports = router;



router.post('/', (req, res) => {
    console.log('REQ>>>>>>>>', req.files)

    if (req.files.file === null) {
        return res.status(400).json({ msg: "You did not upload any files"})
    }
    const file = req.files.file;
    file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if (err) {
            console.log(err)
            return res.status(500).send();
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })


});