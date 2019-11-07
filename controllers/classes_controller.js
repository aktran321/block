const db = require("../models");

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

}