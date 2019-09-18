var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Profile.findAll({}).then(function(dbProfiles) {
      res.render("index", {
        msg: "Welcome!",
        profiles: dbProfiles
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/profile/:id", function(req, res) {
    db.Profile.findOne({ where: { id: req.params.id } }).then(function(dbProfile) {
      res.render("profile", {
        profile: dbProfile
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
