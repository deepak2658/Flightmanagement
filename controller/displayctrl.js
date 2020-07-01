'use strict'

const User = require('../model/userdb')
const Flight = require('../model/flight')

exports.getHome = (req,res,next)=>{
    res.render('homepage.pug',{pagetitle : 'Airprice Company'})
}
exports.getResults = (req,res,next)=>{
    const search = {
    fromn : req.body.from,
    to : req.body.to,
    depart : req.body.depart,
    tracelclass : req.body.class,
    travelstop : req.body.stop}
    console.log(search)
    res.render('/')

}

exports.getlogin = (req,res,next)=>{
    res.render('signup.pug')
}

exports.addUser = (req,res,next)=>{
    const userDetail = {
        username : req.body.username,
        password : req.body.pwd1,
        firstname : req.body.firstname,
        middlename : req.body.middlename,
        lastname : req.body.lastname,
        email : req.body.email,
        gender : req.body.gender,
        DOB : req.body.birthday,
        no : req.body.tel,
        name : ''
    }
    userDetail.name = userDetail.firstname+' '+userDetail.middlename+' '+userDetail.lastname;
    User.create({username : userDetail.username,email : userDetail.email,fullname:userDetail.name, password : userDetail.password,gender : userDetail.gender,DOB : userDetail.DOB,no : userDetail.no});    
    res.redirect('/home')
}

exports.searchFlightOneway = (req,res,next)=>{
    const search = {
        from : req.body.from,
        to : req.body.to,
        depart : req.body.depart,
        tracelclass : req.body.class,
        travelstop : req.body.stop}
    console.log(search)
    Flight.findAll({where : {departure: search.from,arrival: search.to  }}).then(user=>{
        console.log(user[0]);
        res.render('results.pug',{flights : user[0].dataValues})
        // if(user[0]){
        //     if(user[0].dataValues.username == DetailsToverify.username){
        //         if(user[0].dataValues.password == DetailsToverify.password)
        //         {
        //             res.redirect('/home');
        //         }
        //         else{
        //             res.send('<h1>incorect password</h1>');
        //         }
                
        //     }       
        // }
    })
    
}
exports.searchFlightRoundTrip = (req,res,next)=>{
    const search = {
        fromn : req.body.from,
        to : req.body.to,
        depart : req.body.depart,
        return : req.body.return,
        tracelclass : req.body.class,
        travelstop : req.body.stop}
        console.log(search)
    
        Flight.findAll({where : {departure: search.from,arrival: search.to  }}).then(user=>{
            console.log(user[0]);
            res.render('results.pug',{flights : user[0].dataValues})
        })    
},

exports.showAllFlights = (req,res,next)=>{
  
    Flight.findAll().then(user=>{
        console.log(user[0]);
        res.render('results.pug',{flights : user[0].dataValues})
    })  

}

exports.userLogin = (req,res,next)=>{
    res.render('customersignin.pug')
},

exports.verifyUser = (req,res,next)=>{
    const DetailsToverify = {
        username : req.body.username,
        password : req.body.pwd
    }
    console.log(DetailsToverify);
    User.findAll({where : {username: DetailsToverify.username }}).then(user=>{
        console.log(user[0]);
        if(user[0]){
            if(user[0].dataValues.username == DetailsToverify.username){
                if(user[0].dataValues.password == DetailsToverify.password)
                {
                    res.redirect('/home');
                }
                else{
                    res.send('<h1>incorect password</h1>');
                }
                
            }       
        }
    })
},

exports.getAdminPage = (req,res,next)=>{
    res.render('adminpage.pug')
},

exports.postflight = (req,res,next)=>{
    const flight = {
        flightno : req.body.flightno,
        airplaneno : req.body.airplaneid,
        departure : req.body.departure,
        dtime : req.body.dtime,
        arrival : req.body.arrival,
        atime : req.body.atime,
        ecapacity : req.body.ecapacity,
        eprice : req.body.eprice,
        bcapacity : req.body.bcapacity,
        bprice : req.body.bprice
    }
    console.log(flight)
    Flight.create(
        {
            flightno : flight.flightno,
            airplaneno : flight.airplaneno,
            departure : flight.departure,
            dtime : flight.dtime,
            arrival : flight.arrival,
            atime : flight.atime,
            ecapacity : flight.ecapacity,
            eprice : flight.eprice,
            bcapacity : flight.bcapacity,
            bprice : flight.bprice
            
        })
    res.redirect('/Adminpage.html')
}

exports.updatefile = (req,res,next)=>{
    const flight = {
        flightno : req.body.flightno,
        airplaneno : req.body.airplaneid,
        departure : req.body.departure,
        dtime : req.body.dtime,
        arrival : req.body.arrival,
        atime : req.body.atime,
        ecapacity : req.body.ecapacity,
        eprice : req.body.eprice,
        bcapacity : req.body.bcapacity,
        bprice : req.body.bprice
    }
    console.log(flight);
}
