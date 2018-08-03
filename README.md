# Space Age

#### Epicodus JavaScript Week 1 Solo Project

#### By Scott Fraser

## Description

A Javascript app to calculate your galactic age and mortality

## Specs


| Behavior	| INPUT	| OUTPUT |
| :----------:| :-----: | :-------:|
|Take a person’s age in years and convert it into seconds.| Age | Age in seconds|
|Find exact age in seconds| birthday | get age in seconds based on current time |
|Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)| Birthday | Current Age * .24 |
|Return the age of a human in Venus years. (A Venus year is .62 Earth years.)| Birthday | Current Age * .62 |
|Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)| click "remove all"| Birthday | Current Age * 1.88 |
|Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)| Birthday | Current Age * 11.86 |
|Determine how many years a user has left to live on each planet| The user will input the average life expectancy for their demographic | Birthday | Life expectancy - Age * (.24, .62, 1, 1.88, 11.86) |
|If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy| Birthday | if life Expectancy < Age, Age - Life expectancy |


## Setup/Contribution Requirements

1. Go to the repo in GitHub
1. Clone the repo
1. Go to project directory root folder
1. Open console
1. Type $ npm install to install dependancies
1. Type $ npm run start to start the program on your local host


## Technologies Used

* JavaScript ES6
* NPM (Node Packet Manager)
* Jasmine
* Karma
* Babel
* Visual Studio Code
* GitHub

## Links

* https://github.com/scottafraser/space_age

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Scott Fraser ***