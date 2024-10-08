const express  = require('express');
const router = express.Router();

const {getActor,saveActor,getActorById,updateActor,deleteActor} = require('../controller/UserController');





router.get('/',getActor);
router.post('/save', saveActor);
router.get('/:id', getActorById);
router.put('/update/:id', updateActor);
router.delete('/:id', deleteActor);

module.exports = router;


