# thatre-api-mvc-pattern
create database for theatre in mvc pattern given in unit 4 evaluation
Web 12 Backend C4 Pending
Problem
Evaluation for week 4

Create a user collection which has following fields

name
email
password
profile_photo_url
roles
Create a movies collection which has the following fields

name
actors ( array )
languages ( array )
directors ( array )
poster_url ( image_url of the poster )
Create a theatres collection which has following fields

name
location
Create a screens collection which has following fields

name
threatre ( references the theatres collection )
Create a shows collection which has the following fields

timing
movie ( references the movies collection )
total_seats
screen ( references the screens collection )
Create a seats collection which has the following fields

show ( references the shows collection )
Create a user registration flow which contains below APIs

Also allow the user to use register and login ( if user account is already created then they should be logged in else create the account and then log them in)

Create below lectures endpoints

post /movies ( create movies with all details )
get /shows ( get all shows for a particular movie )
get /seats ( get all available seats for a show )
get /shows/nearest ( get all shows of a movie in the same location as the user with seat available )
get /movies ( get all movies for a particular actor )
post /seat ( book seats for users and first check if the number of seats required by user is available and if yes then book it )
PLEASE NOTE :- MVC architecture has to be followed.
