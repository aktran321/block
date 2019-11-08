app.get("/classInput", function(req, res) {
  db.Classes.findAll({
    where: subject
  }).then(function(result) {
    console.log(result);
    var subjectData = {
      classes: result
    };
    res.render("classInput", subjectData);
  }).catch(function(err) {
    res.json(400,err);
  });
});