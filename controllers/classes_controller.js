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
//WAIT I think everything below here is going to get deleted
//Get Route for classInput when the user submits their classes
app.get('/classInput/search', (req,res) => {
  console.log("This is req.body:" + req.body);
  let {} = req.body;
  let errors =[];
  //============
  //here is space to add validation... but we can to that later
  //============
  //Insert the data from the user into a table

  //now we have to take the values that the user submitted and find
  //the corresponding data from the tables
});
searchQuery = "";
  app.post('/api/search', function(req, res){
    //reassign value
    searchQuery = req.body.course-title-input;
    res.redirect("/api/get-id/");
  });
};




