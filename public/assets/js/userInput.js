$function() {
    $("#idOfFormSubmitButtonHere").on("click", function() {
        event.preventDefault();
        var id = $(this).data("id");

        var classTitle = {
            title: $("#course-title-input").val().trim();
        }
        $.get("/api/classes", function(data) {
            console.log(data);
            if(title = data.title) {
                reRoute();
            } else {
                console.log("One or more of the classes chosen is not in the database")
            }
        });
    });

    function getClass(userData) {
        $.get("/api/classes", userData).then(reRoute());
    }
    function reRoute() {
        window.location.href = "/scheduleDisplay";
    }
}