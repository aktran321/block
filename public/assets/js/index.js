$("#login").on("click", function(){
    event.preventDefault();
var input={
    email:$("#email-input").val().trim(),
    password:$("#password-input").val().trim()
}
function isLoginValid (input) {

    $.ajax("api/students/search", {
        type: "GET",
        data: input
    }).then(
        function (response) {
            console.log("login successful");
            return response > 0;
        }
    );
}

isLoginValid(input).then(isUnique => {
    if (isUnique) {
    }
});

})