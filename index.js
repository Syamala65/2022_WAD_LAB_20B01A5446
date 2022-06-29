var express = require('express');
var path=require('path');
var router = express.Router();


// /* GET home page. */
//   router.get('/', function(req, res, next) {
//      // res.render('index', { title: 'Express' });

//   // res.send("<h2>Hello This is express developed by Syamala</h2>");
//   res.sendFile(path.resolve("public/node.html"));
//   });

 // router.get('/forgotten password.html', function(req, res, next) {
 //   // res.render('index', { title: 'Express' });

 // // res.send("<h2>Hello This is express developed by Syamala</h2>");
 // res.sendFile(path.resolve("public/forgotten password.html"));
// });
// router.get('/index', function(req, res, next) {
 //   // res.render('index', { title: 'Express' });

 // // res.send("<h2>Hello This is express developed by Syamala</h2>");
 // res.sendFile(path.resolve("public/index.html"));
 // });
 // router.get('/login', function(req, res, next) {
 //   // res.render('index', { title: 'Express' });

 // // res.send("<h2>Hello This is express developed by Syamala</h2>");
 // res.sendFile(path.resolve("public/login.html"));
 // });
 // router.get('/signup', function(req, res, next) {
 //   // res.render('index', { title: 'Express' });

 // // res.send("<h2>Hello This is express developed by Syamala</h2>");
 // res.sendFile(path.resolve("public/signup.html"));
 // });
 // router.get('/contactus', function(req, res, next) {
 //   // res.render('index', { title: 'Express' });

 // // res.send("<h2>Hello This is express developed by Syamala</h2>");
 // res.sendFile(path.resolve("public/contactus.html"));
 // });

 // router.post('/loginsubmit', function(req, res, next) {
 //   var output="username:"+req.body.username+"<br>password:"+req.body.password
 //   res.send(output)
 // });
 // });
//  router.get('/index', function(req, res, next) {
//   //   // res.render('index', { title: 'Express' });
 
//   // // res.send("<h2>Hello This is express developed by Syamala</h2>");
//    res.sendFile(path.resolve("public/index.html"));
//   });
  
//   router.get('/registration', function(req, res, next) {
//  //   // res.render('index', { title: 'Express' });

//  // // res.send("<h2>Hello This is express developed by Syamala</h2>");
//   res.sendFile(path.resolve("public/registration.html"));
//  });
//  router.get('/registration', function(req, res, next) {
//   req.path(req.body)
//  });

//  router.get('/ejs',function(req, res, next) {
//   //   // res.render('index', { title: 'Express' });
 
//   //  res.send("<h2>Hello This is express developed by Syamala</h2>");
//    res.render('index', { title:'Embedded Java Script code' });
//   });

  // router.get('/fbposts',function(req, res, next) {
  //   //   // res.render('index', { title: 'Express' });

  //   var posts=[
  //     {title:"HBD", message:"Happy Birthday to You"},
  //     {title:'Casual',message:"Hello How are You"},
  //     {title:'Announcement',message:'Bahubali movie is releasing on'},
  //     {title:"Greetings",message:"Greetings pf the day"},
  //     {title:"Event",message:"Half saree event"}
  //   ]
  //   res.render('index', { title:'Facebook Posts',posts:posts });
  // });


router.get('/selectary',function(req, res, next) {

var mysql=require('../database/db');

mysql.getConnection((err, connection) => {
      if(err) throw err;
connection.query('select * from student limit 2', (err, rows) => {
          connection.release(); 
          if(err) throw err;
          //res.render('index', {rows:rows});
          res.send(rows);
      });
  });

});

router.get('/selectary',function(req, res, next) {

  mysql.getConnection((err, connection) => {
        if(err) throw err;
  connection.query('select * from student limit 2', (err, rows) => {
            connection.release(); 
            if(err) throw err;
            res.render('datadisplay', {rows:rows,title:"student details"});
  //           res.send(rows);
        });
    });
  
  });

 
  // router.post('/studentregistrationsubmit', function(req, res, next) {
  //  var output=<table>
  //   <tr>
  //     <td>
  //     "Gender:"+req.body.gender
  //     +Branch:"+req.body.branch
  //     </td>
  //   </tr>
  //  </table>
  //   res.send(output)
  // });



module.exports = router;
