// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");

module.exports = function(app) {
  //ROUTES
  //============================================================================
  //app.get('/scheduleDisplay', (req, res) => res.render('scheduleDisplay'));
  app.get("/",(req,res) => res.render('index'));
  app.get('/userDashboard', (req, res) => res.render('userDashboard'));
  // app.get('/classInput', (req, res) => res.render('classInput'));
  app.get('/newUser', (req, res) => res.render('newUser'));
  app.get('/scheduleDisplay', (req, res) => res.render('scheduleDisplay'));
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

// *** TESTING CLASS INPUT **** //

// app.get("/classInput/:classID", function(req, res) {
//   let subject = req.params.classID;
//   console.log(subject);
//   db.Classes.findAll({
//     where: subject
//   }).then(function(result) {
//     console.log(result);
//     var subjectData = {
//       classes: result
//     };
//     res.render("classInput", subjectData);
//   }).catch(function(err) {
//     res.status(400).json(err);
//   });
// });



//============================================================================

};




