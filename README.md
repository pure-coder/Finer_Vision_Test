This uses the laravel PHP framework to produce a form that is presented on the front end
via the React.Js library, when submitted the React.js form then posts the data to the PHP backend
where it is processed. The data is then sent to a mySQL database. The forms data is validated before submission via
javascript on the frontend, allowing the user to get feedback before the data is sent (which was specified in the brief). The form is styled using sass
 and uses bootstrap and jquery to animate the different sections of the form, where a different section
 is shown depending on what step they are on during the submission process.

This is run on laravel on a Apache server:

To use you must clone the project to a directory, then run the 'composer install' command
from within the projects directory.

Then you will have to use the 'npm install' command to set up the react application and required
dependencies.

Copy the env.example file to create a .env file (this is needed for laravel, ie key, database variables, etc).

Generate a key using the php artisan key:generate command.

Create a database (I used mySQL).

Migrate the data into laravel using the 'php artisan migrate' command.

Add your database details (variables) to the .env file.

Run the react dev server using 'npm run watch'.

To start the laravel development on say port 8080 run the 'php artisan server --port=8080'
