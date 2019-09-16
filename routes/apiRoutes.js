var db = require("../models");

module.exports = function(app) {
  app.get("/api/profiles", function(req, res) {
    db.Profile.findAll({}).then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.post("/api/profiles", function(req, res) {
    db.Profile.create(req.body).then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });

  app.delete("/api/profiles/:id", function(req, res) {
    db.Profile.destroy({ where: { id: req.params.id } }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
  app.put("/api/profiles", function(req, res) {
    db.Post.update(req.body, { where: { id: req.body.id } }).then(function(dbProfile) {
        res.json(dbProfile);
    });
  });
};
