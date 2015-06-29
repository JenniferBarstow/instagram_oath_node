## Setup

* Fork and clone this repository, then `cd` into the directory you cloned it to
* `npm install`
* If you don't want to have to kill and restart your server, install nodemon with `npm install -g nodemon` and run the exercise using `nodemon server.js`

## Goal

Implement a CRUD interface for cars. Style (CSS), authentication, and validations are not required for this exercise. The primary goal is to make sure that the entire CRUD interface is covered appropriately for this single resource.

The `Car` model has been provided for you, as well as sample usage for it inside of `server.js`. A recommended ordering for this exercise is: index, new, create, edit, update, destroy.

Recall that browsers only natively support `GET` and `POST`, the ([other methods are available via AJAX](http://stackoverflow.com/questions/165779/are-the-put-delete-head-etc-methods-available-in-most-web-browsers)). Given this fact, you will need to handle update and destroy with routes instead, `/cars/:id/update` and `/cars/:id/delete`, respectively.

## Stretch Goal(s)

1. Implement validations and a system for reporting back flash messages (or find a node package that handles flash messages).
1. Use this [StackOverflow post](http://stackoverflow.com/questions/9398718/rendering-jade-template-with-layout-without-express) to introduce a layout that links between the index and new views.
1. Add some style to this simple CRUD app.