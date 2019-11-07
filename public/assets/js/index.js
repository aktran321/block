$("#login").on("click", function(){
    event.preventDefault();
var input={
    email:$("#email-input").val().trim(),
    password:$("#password-input").val().trim()
}
function isEmailUnique (email,password) {
    return db.Students.count({ where: { email: input.email,password:input.password } })
    .then(count => {
        return (count > 0) ? true : false;
    });
}

isEmailUnique().then(isUnique => {
    if (isUnique) {
    }
});

})