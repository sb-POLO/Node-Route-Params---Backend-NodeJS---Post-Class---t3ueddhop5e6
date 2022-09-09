const { Router } = require('express');
const router = Router();


router.get('/:name/:age', (req, res, next) => {
    try {
        const name = req.params.name;
        const age = req.params.age;
        res.status(200).json({"message": `Hello ${name}, you are ${age} years old`})
    } catch(e) {
        return res.status(500).json(e);
    }
})
module.exports = router;
