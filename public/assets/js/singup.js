$("#signup-button").on("click", function (event) {
    event.preventDefault();

    console.log('fired')
    var signUp = {
        email: $("#new-email").val().trim(),
        password: $("#new-password").val().trim()
    };

    $.ajax("api/students", {
        type: "POST",
        data: signUp
    }).then(
        function () {
            console.log("new account created");

        }
    );
});

