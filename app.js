var express = require("express"),
 app = express(),
 puppiesArr = [],
 id = 1;

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index", {puppiesArr: puppiesArr});
})

app.get("/contact", function(req, res){
	res.render("contact")
})

app.get("/about", function(req, res){
	res.render("about")
})

app.get("/puppies/new", function(req, res){
	res.render("new");
})

app.get("/puppies", function(req, res){
	var puppy = {};
	puppy.puppyName = req.query.puppyName;
	puppy.puppyAge = req.query.puppyAge;
	puppy.id = id;
	id++;
	puppiesArr.push(puppy);
	res.redirect("/");
})

app.get("/puppies/:id", function(req, res){
	puppiesArr.forEach(function(puppy){
		if(Number(req.params.id) === puppy.id){
			var choice = puppy;
		res.render("showPuppy", {choice: puppy});
		}
	})
})

app.listen(8000, function(){
	console.log("server started");
});