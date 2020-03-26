var express = require('express');
var router = express.Router();
let ctrlPractics = require('../controllers/practics');
let ctrlPacks = require('../controllers/packs');
let ctrlStudents = require('../controllers/students');
let ctrlAuth = require('../controllers/auth');

router.get('/practics', ctrlPractics.getAll);
router.get('/practics/:id', ctrlPractics.getOne);
router.post('/practics', ctrlPractics.create);
router.put('/practics/:id', ctrlPractics.update);
router.delete('/practics/:id', ctrlPractics.delete);

router.get('/packs', ctrlPacks.getAll);
router.get('/packs/:id', ctrlPacks.getOne);
router.post('/packs', ctrlPacks.create);
router.put('/packs/:id', ctrlPacks.update);
router.delete('/packs/:id', ctrlPacks.delete);

router.get('/students', ctrlStudents.getAll);
router.get('/students/:id', ctrlStudents.getOne);
router.post('/students', ctrlStudents.create);
router.put('/students/:id', ctrlStudents.update);
router.delete('/students/:id', ctrlStudents.delete);

router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);

module.exports = router;