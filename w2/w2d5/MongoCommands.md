https://downloads.mongodb.com/compass/mongosh-1.7.1-win32-x64.zip

Create a database called 'my_first_db'.
1. use my_first_db

Create students collection.
2. db.createCollection('myFirstDb')

Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
Create 5 students with the appropriate info.
3. db.item.insert({name: Ruben, home_state: NYC, lucky_number: 25, birthday: {month: september, day: 25, year: 2002}})


Get all students.

Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

Get all students whose lucky number is greater than 3

Get all students whose lucky number is less than or equal to 10

Get all students whose lucky number is between 1 and 9 (inclusive)

Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

Add some unique interests for each particular student into each of their interest arrays.

Add the interest 'taxes' into someone's interest array.

Remove the 'taxes' interest you just added.

Remove all students who are from California.

Remove a student by name.

Remove a student whose lucky number is greater than 5 (JUST ONE)

Add a field to each student collection called 'number_of_belts' and set it to 0.

Increment this field by 1 for all students in Washington (Seattle Dojo).

Rename the 'number_of_belts' field to 'belts_earned'

Remove the 'lucky_number' field.

Add a 'updated_on' field, and set the value as the current date.
1. db.item.deleteOne({_id: '63efbce0b106626a64bfb414'})