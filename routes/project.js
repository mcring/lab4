exports.viewProject = function(req, res) { 
  // controller code goes here 
  //res.render('viewProject');
  var name = req.params.name;
  console.log("The project name is: " + name);
  res.render('project', {
  	'projectName': name
  });
};