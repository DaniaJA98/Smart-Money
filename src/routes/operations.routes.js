const { Router } = require('express')
const { getAllOperations, getOperation, createOperation, updateOperation, deleteOperation } = require('../controllers/operations.controller')

const router = Router();

router.get('/operations', getAllOperations)
router.get('/operation/:id', getOperation)
router.post('/operation', createOperation)
router.put('/operation/:id', updateOperation)
router.delete('/operation/:id', deleteOperation)

module.exports = router;