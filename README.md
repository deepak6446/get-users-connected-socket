# get-users-connected-socket

## This small system should be composed by 2 pages:

#### 1. LOGIN:
####### 1.1 Make only one UserName field and one button to login.
#######  1.2 If the user let the UserName field blank and click on the button, change the UserName field to red.
#######  1.2 As soon the user clicks on Login, redirects him to the Main Page. Insert the username in an array (do not use a database).

#######  2. MAIN PAGE:
#######  2.1 Using socket.io, make a text box listing who’s online in the first column and how long he’s online in a second column (changing dynamically each second).
#######  2.2 In case the user closes his tab, he should be removed from the list 
