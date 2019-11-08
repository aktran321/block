// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");

const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


module.exports = function(app) {
  //
  // app.get("/", function(req, res) {
  //   db.Classes.findAll({}).then(function(result) {
  //     var classData = {
  //       classes: result
  //     };
  //     res.render("index", classData);
  //   }).catch(function(err) {
  //    res.json(400,err);
  //   });
  // });

  //ROUTES
  //============================================================================
  //app.get('/scheduleDisplay', (req, res) => res.render('scheduleDisplay'));
  app.get("/",(req,res) => res.render('index'));
  app.get('/userDashboard', (req, res) => res.render('userDashboard'));
  app.get('/classInput', (req, res) => res.render('classInput'));
  app.get('/newUser', (req, res) => res.render('newUser'));
//=========================================================================
//Probably deleting this section
  app.get('/search', (req, res) => {
    //we want all the input information from the classInput form field
    //and put it into req.body
    let {title} = req.body;
    db.Classes.findAll({
      where: {
        title:{
          [Op.or]: req.body
        }
      }
    }).then(function(result) {
      console.log("Hey im in classes_controller and using the findAll method. Here is the result: "+JSON.stringify(result));
      var selectedClasses = {classes: result};
      res.render('/scheduleDisplay', selectedClasses)
    });
  });
//============================================================================
  //route associated with the ajax call for classInput
  app.get("/api/classes", function(req, res){
    //const title = req.query.title
    db.Classes.findAll({
      where: {
        title: {
          [Op.or]:req.body
        }
      }
    }).then(function(result){
      if(result != null){
        //res.redirect("/scheduleDisplay")
        var selectedClasses = {classes: result};
        res.render('/scheduleDisplay', selectedClasses)
      } else {
        console.log("Error: Classes not found")
      }
    });
  });

//============================================================================

};

