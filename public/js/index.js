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