# wall_app
**Title** 
<br>Wall App<br/>

**Description**
<br>Wall app is an application that allows users to register, login, and wirte on a wall<br/>

Registration and login: Anonymous users can create a new user. New users can then log in.
Wall(authed): After logging in, a user can post messages on the site-wide wall, simailar to a facebook wall except there is only 1 wall for the entire site.
Wall(guest): Guests as well as authed users can see all of the messages on the wall.

**Install and run the project**
<br>For backend:<br/>
```
$python manage.py runserver
```

<br>For frontend:<br/>
```
$npm start
$npm install --save react-router-dom
$npm install --save redux
$npm install --save react-redux
```


**Use the project**
<br>example:<br/>

```
import SignUp from '../pages/signup/SignUp'

<div>
     <Signup/>
<div>
```


**Tech info**
<br>Backend: REST API (Built with Django)<br/>
Frontend: AJAX-based webiste (Using React)


