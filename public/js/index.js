var $submitLogin = $("#submit-login");
var $saveChangesBtn = $("#save-changes");
var $email = $("#Email");
var $gender = $("#gender-text");
var $username = $("#username-text");
var $lookingFor = $("#looking-for-text");
var $interests = $("#interests-text");
var $aboutMe = $("#about-me-description");

var API = {
    saveProfile: function(profile) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/profiles",
        data: JSON.stringify(profile)
      });
    },
    getProfiles: function() {
      return $.ajax({
        url: "api/profiles",
        type: "GET"
      });
    },
    deleteProfile: function(id) {
      return $.ajax({
        url: "api/profiles/" + id,
        type: "DELETE"
      });
    }
};

var refreshProfiles = function() {
  API.getProfiles().then(function(data) {
    console.log(data);
    var $profiles = data.map(function(profile) {
      var $a = $("<a>")
        .text(profile.name).attr("href", "/profile/" + profile.id);
        
    })
    .append($a);
  })
}

var handleSubmitLogin = function(event) {
  event.preventDefault();

  var profile = {
    email: $email.val().trim()
  };

  API.saveProfile(profile).then(function() {
    refreshProfiles();
  });
};

var handleProfileUpdate = function(event) {
  event.preventDefault();

  var profile = {
    username: $username.val().trim(),
    gender: $gender.val().trim(),
    lookingFor: $lookingFor.val().trim(),
    interests: $interests.val().trim(),
    aboutMe: $aboutMe.val().trim()
  };

  API.saveProfile(profile).then(function() {
    refreshProfiles();
  });

  $username.val("");
  $gender.val("");
  $lookingFor.val("");
  $interests.val("");
  $aboutMe.val("");
    
};


$saveChangesBtn.on("click", handleProfileUpdate);