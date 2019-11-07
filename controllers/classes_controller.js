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
  app.get('/scheduleDisplay', (req, res) => res.render('scheduleDisplay'));
  app.get('/userDashboard', (req, res) => res.render('userDashboard'));
  app.get('/classInput', (req, res) => res.render('classInput'));
  app.get('/newUser', (req, res) => res.render('newUser'));


}