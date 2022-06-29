const { Router } = require('express')

const router = Router();

router.get('/operations')
router.get('/operation/:id')
router.post('/operation')
router.patch('/operation/:id')
router.delete('/operation/:id')

module.exports = router;