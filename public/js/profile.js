// still in the works, use 15.12 for reference
$(document).ready(function() {

    $(document).on("click", "button.edit", handleProfileEdit);


    function handleProfileEdit() {
        var currentProfile = $(this)
        .parent()
        .parent()
        .data("profile");
        window.location.href = "/cms?profile_id=" + currentProfile.id;
    }

});