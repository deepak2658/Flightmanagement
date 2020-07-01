const express = require('express')
const dispctrl = require('../controller/displayctrl')

const router = express.Router()

router.get('/home',dispctrl.getHome)
router.post('SearchResultOneway.php',dispctrl.getResults)
router.get('/signup.html',dispctrl.getlogin)
router.get('/homepage.html',dispctrl.getHome)
router.get('/Adminpage.html',dispctrl.getAdminPage)
router.get('/customersignin.html',dispctrl.userLogin)

router.post('/login.php',dispctrl.verifyUser)
router.post('/register.php',dispctrl.addUser)
router.post('/resultOneWay.pug',dispctrl.searchFlightOneway)
router.post('/SearchResultRoundtrip.php',dispctrl.searchFlightRoundTrip)
router.post('/SearchResultAll.php',dispctrl.showAllFlights)
router.post('/registerFlight',dispctrl.postflight)
router.post('/updateflight',dispctrl.updatefile)

module.exports = router