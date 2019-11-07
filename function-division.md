Each of these is a page in public > assets > js. 

Index - ALEX
  * login functionality
    ** see if the user exists and if they do, does their password match, otherwise, give error that username/password does not exist
    ** build in sequelize validate info.
    ** login button goes to user dashboard

Sign-Up - SANDY
  * sign in functionality
  ** getting the information from the user (name, username and password) and then pushing that to our students table in the database
    ** sign up button would go to their dashboard

User Input - ANDY
  * submit functionality
  ** submit button would go to logic that finds all the possible outcomes of their schedule and posts it to schedule display page.

Schedule Display - JUAN
  * back button
  ** to return to the user input page

<!-- ===================================================== -->

CONTROLLER (SHOULD BE ONE PERSONS JOB)
* Index Page 
  ** POST function to post the users info to check it against our database

* Sign-Up Page
  ** POST function to post the users info into our database

* User Input Page
  ** GET function to display information to the user
  ** POST function to capture users input

* Schedule Display
  ** GET function to display the results of the logic