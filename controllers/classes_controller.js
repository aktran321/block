// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");
// ====================================================
// ROUTES (GET ONLY)
// ====================================================
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

  app.get("/class-input", function(req, res) {
    db.Classes.findAll({}).then(function(result) {
      var classData = {
        classes: result
      };
      res.render("classInput", classData);
    }).catch(function(err) {
      res.json(400,err);
    });
  });

  app.get("/new-user", function(req, res) {
    db.Classes.findAll({}).then(function(result) {
      var classData = {
        classes: result
      };
      res.render("newUser", classData);
    }).catch(function(err) {
      res.json(400,err);
    });
  });

  app.get("/schedule-display", function(req, res) {
    db.Classes.findAll({}).then(function(result) {
      var classData = {
        classes: result
      };
      res.render("scheduleDisplay", classData);
    }).catch(function(err) {
      res.json(400,err);
    });
  });

  app.get("/user-dashboard", function(req, res) {
    db.Classes.findAll({}).then(function(result) {
      var classData = {
        classes: result
      };
      res.render("userDashboard", classData);
    }).catch(function(err) {
      res.json(400,err);
    });
  });

};