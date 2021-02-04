# Movie Log App

## Project Overview

<br>

Movie Log App is an app that allows a movie lover to have of control of his pending to watch movies. Allows a user, once logged into the app, to look for already created movies to add to his list or to create new ones, which will also be available for others to  select too. 

<br>
<br>

## Table of contents



- [Current Features](#current-features)
- [Project Description](#project-description)
- [Team Members](#team-members)
- [Project links](#project-links)
- [MVP](#mvp)
- [Stretch Goals](#stretch-goals)
- [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
- [Issues and Resolutions](#issues-and-resolutions)
- [Lessons Learned](#lessons-learned)  

<br>
<br>

## Current Features

<br>

+ A Movie Index page that displays all available movies and allows to:
  - Create a new movie
  - Access the details of an existing movie
  - Edit an existing movie
  - Delete a movie
  <br>
+ A User landing page which allows to:
  - Sign up into the app
  - Loggin into the app
  <br>
+ A User profile page that:
  - Displays the user pending to see movies
  - Allows to edit his details
  - Allows to erease himself from the app

<br>
<br>

## Project Description

<br>

The requirements for this project were to form a team with a partner to make a full-stack CRUD App with at least two models associated in some way. The App must be deployed online and be accessible through Heroku.

Initially, it was decided to go for a very basic design, stripped of all style in order to focus in the functionality, keep things simple securing the MVP goal. Then, in a future chance, go for the visual aspect of the app as well as functionality improvements like filters, images, etc.

The work approach taken was, first, work together (Pairing Programming) to generate the basic structure of the App considering the MVC principles, but not including Sequelize initially. Then, after completing that structure, start to share code through the Project Repository, so everyone could work in an independent section. This way, everyone could work individually, without the fear of affecting other's work. 

Detail of the work flow was like this:

+ Agreed on theme for the app project.
<br>

+ Discuss features needed to achieve MVP.
<br>

+ Created a list of features and the layout of the database relationships needed to achieve MVP.
<br>

+ Agreed on two phase approach to develop the app:
    - Phase A: Develop MVC architecture with data in files containing object arrays.
    - Phase B: Implement ORM Sequelize to the model to create a database with the required relationships.
<br>

+ For phase A, we wrote a list with the sequence of steps needed to create the basic folder and file structure for the project.
We created the folder/file structure and added the basic minimum code for the files (ie server.js, index.js, etc).
We performed a push request to origin on GitHub and uploaded the basic structure of the project and afterwards each developer performed a pull request and merge to his local branch.
Reviewed the project and agreed on having each developer work on a specific model (User or Movie), merging the branches at the end of each phase after fully testing the code in each phase.
<br>

+ For phase B, we wrote a list with the sequence of steps to implement sequelize for each model and relationships.
Each  team member implemented ORM sequelize in the same model developed during phase A.


<br>
<br>

## Team Members
<br>

+ Hector Urdaneta
+ Octavio Villalpando


<br>
<br>

## Project Links

<br>

+ [github repo](https://github.com/lfrex/movie-app "Github repo")
+ [deployment](https://movielog-app.herokuapp.com/users "Heroku Movie-Log App")

<br>
<br>

## MVP
<br>
The MVP for this project is as follows, determined by the following User Stories:
<br>
<br>

+ As a movie lover, I need a Movie-App, So I can have control of my movie bucket list.
+ As a Movie-App user, I need to be able to sign into the app, so I can log into it.
+ As a Movie-App user, I need to be able to login into the app, so I can access my profile page.
+ As a Movie-App user, I need to be able to add new movies to the App, So I can make them available for selection in my bucket list.
+ As a Movie-app user, I need to be able to see a list of pending to see movies displayed on my profile.
+ As a Movie- App user, I need to be able to edit a movie record.
+ As a Movie-App user, I need to be able to delete a movie record.
+ As a Movie-App user, I need to be able to edit my profile.
+ As a Movie-App user, I need to be able to delete my profile.
<br>
<br>

## Stretch Goals
<br>
The stretch goals for this project are as follows:
<br>
<br>

+ As a Movie-App user, I need to be able to generate a list of already seen movies.
+ As a Movie-App user, it would be nice to be able to generate a movie list by lead actor.
+ As a Movie-App user, it would be nice to be able to generate a movie list by classification.
+ As a Movie-App user, it would be nice to be able to generate a list of movies by director.
+ Add styling (CSS) to the views in the project.
+ Include sign uo/long in functionality with encrypted passwords & authorization flow.


<br>
<br>

## Wireframes
<br>
Initial wireframe for the project:

![Movie App wireframe](https://i.imgur.com/4A7ErzC.jpg "Movie-App Wireframe")
<br>

Definition of the Models Relationships: 

![Movie App Relationships Analysis](https://i.imgur.com/nqjhf99.jpg "Databases relationships design")

<br>
<br>

## Technologies Used
<br>

+ Node.js
+ Postgress
+ Express
+ Sequelize
+ EJS 
+ MVC architecture

<br>
<br>

## Issues and Resolutions
<br>

Issue:

During the final merge and pull request we ran “sequelize db:migrate” to generate the tables created by the co-developers, and also re-seed all the tables with the information. The reseeding create a mismatch of ids between the tables that have a  “one to many “ relationship since the initial relationship is set by the SEEDERS file. The result was a "null" error when trying to view the page on the browser. To fix the issue all tables were deleted, recreated, and reseeded.
<br>
<br>

## Lessons Learned
<br>
One of the main lessons learned with this project was that, working in teams is easier if everyone is in the same channel. At the beggining, it was key to have a meeting to decide how the work flow was going to be, deciding the initial project approach, when to share code, and how to divide the workload. This was key because everyone knew at every moment what to do and what was doing the other. Also, every day it was a meeting to review the day advance, the pending things, any other situations presented, and also to decide the approach for the next day's morning. 
<br>
<br>
Other interesent thing learned was how to use effectively the repo to work as a team. At the beginning, it was a little unclear how to perform the steps to merge the code in the repo and how to retrieve it from there, so everyone could have the same code in their individual branches and continue with his individual work, but after the first (traumatic) experience, everything went smooth and it really demonstrated to be a very useful tool to speed the team's work and a very powerfull resource to align the colletive efforts.



 




