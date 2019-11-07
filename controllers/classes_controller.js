// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");

const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Classes.findAll({}).then(function(result) {
      var classData = {
        classes: result
      };
      res.render("index", classData);
    }).catch(function(err) {
      res.json(400,err);
    });
  });

  //ROUTES
  //============================================================================
  //app.get('/scheduleDisplay', (req, res) => res.render('scheduleDisplay'));
  app.get('/scheduleDisplay', function (req, res) {
   
    db.Classes.findAll({
      where: {
        title: {
          
          //values in the Op.or need to be determined by the form that the user submits
          [Op.or]:req.body.subjects
        }
      }
    }).then(function(result) {
      console.log("Hey im in classes_controller and using the findAll method. Here is the result: "+JSON.stringify(result));

      //this just creates an object for all the 
      var selectedClasses = {
        classes: result
      };
      res.render('/scheduleDisplay', selectedClasses);
    });
  });

  app.get('/userDashboard', (req, res) => res.render('userDashboard'));
  app.get('/classInput', (req, res) => res.render('classInput'));
  app.get('/newUser', (req, res) => res.render('newUser'));
//============================================================================
//POST Route for classInput
app.post('/add', (req,res) => {
  let {} = req.body;
  let errors =[];
  //============
  //here is space to add validation... but we can to that later
  //============
  //Insert the data from the user into a table
})
}

