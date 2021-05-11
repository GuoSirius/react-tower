# COMP6080 Final Exam

For this exam you are provided with this public repostory (`exam-spec`) that all students have access to. This repository contains the questions being asked. You will then also have your own [personal exam repository](https://cgi.cse.unsw.edu.au/~cs6080/redirect/?path=COMP6080/21T1/students/_/exam) where you actually complete the work that will be submitted. The personal exam repo is where you actually commit and push your code.

If you are seeking information not provided in this file, check the [COMP6080 Exam Brief page](https://webcms3.cse.unsw.edu.au/COMP6080/21T1/resources/56789). If your question is still unanswered, follow the "Communicating with teaching staff" instructions.

## WARNING

This applies to all students completing the COMP6080 21T1 exam on Tuesday the 11th of May.

* This exam is an individual assessment. Any attempt to communicate with other people (both other students in this course and outside persons) about the contents of this exam will be treated as academic misconduct and may result in you failing this course. This applies to everyone during the exam time, as well as any communication between the end of your exam and Wednesday the 12th of May at 1pm. To avoid any doubt about your behaviour during the exam, cease all communication with other students for that time.
* From 1pm on Wednesday the 12th of May onward, you are only allowed to discuss the exam with students who have themselves also completed the exam, and it's your responsibility to check if they have.
* Your zpass should not be disclosed to any other person. If you have disclosed your zpass, you should change it immediately.
* Do not place your exam work in any location accessible to any other person. This includes services such as Dropbox and Github.
* If another student in the course makes any sort of contact with you during the exam, or you’re aware of any instances of other students breaching the conditions above, you are required to email cs6080@cse.unsw.edu.au with details of the interaction.

## Change Log

N/A

## 1. The Exam

### 1.1 Overview

You are to build a small single page application (with either ReactJS or Vanilla JS) that has three basic interactive games, along with a dashboard acting as a homepage.

### 1.2. Getting Started

Please clone your [personal exam repository](https://cgi.cse.unsw.edu.au/~cs6080/redirect/?path=COMP6080/21T1/students/_/exam).

Run `yarn install` to install all relevant dependencies to start.

Run `yarn start` to start your ReactJS app.

You are welcome to install any dependencies on top of ReactJS that you would like using `yarn add [dependency]`.

Please note: If you prefer to complete the exam with VanillaJS, then you can simply remove all files we've provided and start from an empty repo.

There is no backend in this application. The entire state you manage should be done in localstorage or another form of persistent browser storage.

### 1.2. Features

The numbers in brackets next to any items (e.g. "Make the page big (1)") describe the number of marks associated with that piece of functionality.

#### 1.2.0. Document, sidebar, and Footer (10 marks)

* The overall document/page should have a `margin` of `0px`. (0.5)
* All screens shall have a sidebar bar that is:
  * `100px` wide. (0.5)
  * Has a height that spans the full height of the viewport. (0.5)
  * Has property `position: fixed` such that no matter where the user scrolls the sidebar is visible. (0.5)
  * Has a background colour of `#eee`. (0.5)
  * Contains a logo (`src/assets/logo.png`) that:
  	* At the top of the nav bar, centre aligned. (0.5)
  	* Has a margin of `15px` on top and bottom. (0.5)
  	* Has a size `50px` x `50px`. (0.5)
  * Contains 4 lines of text that are links: (1)
    * Home (linking to /home)
    * Tictac (linking to /tictactoe)
    * Tower (linking to /tower)
    * Snek (linking to /snek)
  * If the screen width drops below `1400px`, then:
    * The linktext, instead of "Home", "Tictac", "Tower", "Snek" becomes "H", "Ti", "To", "S" (1)
    * The width of the side bar drops to `60px` (0.5)
  * If the screen width drops below `800px`, then:
    * The linktext, instead of "Home", "Tictac", "Tower", "Snek" becomes "H", "Ti", "To", "S" (0.5)
    * The width of the side bar drops to `30px` (0.5)
    * The logo disappears (0.5)
* All screens shall have a footer bar that:
  * Has a height of 50px. (0.5)
  * Has a width that spans the full width of the viewport, minus the sidebar. (0.5)
  * Has a background colour of `#999` (1)
  * Contains no content
* The entirety of the space on the page that isn't used by the sidebar and footer is referred to as the `main body`, and screens from `1.2.1`, `1.2.2`, `1.2.3`, and `1.2.4` should occupy that full space, unless otherwise specified.

#### 1.2.1. Dashboard (11 marks)

* This screen exists on route `/home` and contains the sidebar and footer from `1.2.0`. (0.5)

* This screen shall contain two lines of text that are center aligned:
  * The first line is the text `Please choose an option from the sidebar.` The text is colour `blue` and font size `2em`. (1)
  * The second line is the content `Games left to win: X (reset)`. (1)
    * `X` should be initially set as the number found in the JSON object (format `{"score":5}`) at this URL: [http://cgi.cse.unsw.edu.au/~cs6080/21T1/data/score.json](http://cgi.cse.unsw.edu.au/~cs6080/21T1/data/score.json). (2)
    * Each time the player wins any of the 3 games, this number should go down. (1)
    * The value of `X` shall persist between loads by making use of a form of browser storage (e.g. `localstorage`). (2)
    * Once the value reaches 0, an alert is shown saying 'Congratulations!' and the value is reset. (1)
    * This value should be stored in local storage so that after first load, and prior to a reset, it stays persistent (1.5).
    * When `(reset)` (a button) is clicked, the counter `X` will be reset to the original value. (1)

#### 1.2.2. Game 1 - Tic Tac Toe (17 marks)

This question is loosely based off the [tic tac toe game](https://playtictactoe.org/).

* This page exists on route `/tictactoe` and contains the sidebar and footer from `1.2.0`. (0.5)
* This page will display 3 square containers, in a 3 by 3 configuration, each with width's of 33% and height's of 33%. (2)
  * The table of containers has borders around the outside of each square (`2px solid #333`) with the exception of the very outer border. [E.G. Here](https://playtictactoe.org/	) (1)
* This game consists of two players, each taking a turn. Once a player makes a click on a valid square, their turn ends, and then the other player takes a turn.
  * If it is Player 1's turn, all the non-filled squares on the board should have a background `rgb(255,220,220)`. If it is Player 2's turn, all the non-filled squares on the board should have a background `rgb(220,220,255)`. (2)
  * If Player 1 clicks on a cell while it is there turn, an `O` shall appear in the very centre of the square that is `2em` in size. If Player 2 clicks on a cell while it is there turn, an `X` shall appear in the very centre of the square that is `2em` in size. (3)
* The game is complete either when:
  * All 9 squares are filled; or
  * When there is 3 of `O` or `X` in a row horizontally, vertically, or diagonally.
* Once the game is complete, an animation occurs for 3 seconds where all the cells on the board should have their backgrounds oscillate between white (`#fff`) and black (`#000`) backgrounds every 0.5 seconds until the 3 seconds is over. (Skip this if it's too hard). (3)
* Once the game is complete, and after the animation, a box should appear over the board containing:
  * A background colour of `#fff`, a `1px solid #333` border, width of `200px` and height of `50px` (2)
  * The box should also contain `14pt` font-size text inside that either says 1) "[??] wins" if a user has won, or "No one wins" if no one won. "??" is replace with either `O` or `X` (1.5)
  * Somewhere in this box should contain a piece of text saying "A total of X moves were complete" where X is the number of cells that either Player 1 or Player 2 has filled (number of non empty cells). (1)
* This game is considered to have been "won" when player 1 wins the game.

#### 1.2.3. Game 2 - Tower of Hanoi (23 marks)

This game is loosely based off of the [tower of hanoi game](https://www.mathsisfun.com/games/towerofhanoi.html).

* This page exists on route `/tower` and contains the sidebar and footer from `1.2.0`. (0.5)
* The page will consist of a few key components:
  * Three boxes (of any size) that are equally sized and are aligned in a single row. These boxes should appear roughly in the centre of the screen. (1.5)
  * A border around these boxes of `2px dashed #999`. (0.5)
  * A tower in each box which consists of one horizontal line, and a vertical line extending upward from the middle of the horizontal line. See [the tower of hanoi game](https://www.mathsisfun.com/games/towerofhanoi.html) for visuals. The vertical lines of the towers to have a minimum height of `50px` (as each block that will be placed on each tower will be minimum `10px` tall). (4)
* When the page loads, a simple text prompt is given to the user to ask them how many blocks they want to start with (either 3, 4, or 5). (0.5)
* Once the user selects the number of blocks, that many blocks appear on the left-most tower. Each block must be a different colour and must be smaller than the block below it. (2.5)
* Gameplay is as follows:
  * You can move the top block on any tower to the top of any other tower, but only if the block moved is smaller than the top block on the other tower. To move a block from one tower to another. The player first clicks on the box (containing the tower) to move FROM, and then clicks on the box to move TO. If the move is valid, then the move is successful. (8)
  * The game is won once all of the blocks move from the left tower to the right tower. Once the game is won, a small box with a `#fff` background, a `1px solid #333` border, that is `100px` wide and `50px` tall shall appear over the board. (2)
    * The box shall contain `14pt` font inside that says "Success in [??] moves" where ?? is the number of times that a block was successfully moved between towers. (2)
  * A button shall exist below the 3 boxes, that simply says `Reset`. (0.5)
    * When clicked, the game will "start" again. (0.5)
    * The button shall remain disabled whilst the game has started, but no move has been made. (0.5)
* The game starts automatically when the screen is mounted, or the reset button is clicked.

[A short video demonstration of this game can be found here](https://youtu.be/z7PS3sgMdRI). Please note - do not copy what you see in this video. There are parts of this video that may not comply with the specification. This is purely here to give you a very general sense of the behaviour in case you are struggling to visualise it.

#### 1.2.4. Game 3 - Snek (20 marks)

This page is a simplified implementation of the game [snake](https://playsnake.org/).

* This page exists on route `/snek` and contains the sidebar and footer from `1.2.0`. (0.5)
* This page will consist of a table of fixed size, whereby the table consists of 10 rows and 10 cells of size `10px` for both height and width. Each cell has border of `1px solid #000`. The table itself is centered in the available space on the screen. The area around the table will be largely left as whitespace (2)
* During the game:
  * If a snake fills a cell, the cell should have a background of `#999` (0.25)
  * If food fills a cell, the cell should have a background of `#252525` (0.25)
* The gameplay starts:
  * A snake is placed on the grid in the top left. It occupies 2 pixels (the top left cell, and the square immediately to the right of that). The snake starts of facing toward the right. (1)
  * The food is placed in a random cell on the board. (0.5)
* During gameplay:
  * Every 0.5 seconds, the snake moves in the direction it is facing (left, right, up, or down). A cell in that direction from the front of the snake is filled in, and the last cell of the snake is removed. (2)
  * If the player presses a key on the keyboard of left, right, up, or down, the direction of the snake is changed in that direction (2)
  * If the snake moves into a cell that is beyond the board (i.e. it hits a wall), the game ends (2)
  * If the snake moves into a cell that is occupied by the snake itself, the game ends (2)
  * If the snake moves into a cell that contains the food, on the next cycle the snake's tail is extended by 1 cell, and another piece of food is randomly placed on the board (3)
  * If the snake's length exceeds 20 cells (i.e. collecting 18 food) then the game is won. (1)
* When the game has been won or lost
  * A `100px` x `100px` box should appear over the board that says `[X]`. Box also has a button that says "Play again?". When this button is clicked, the game restarts (3)
    * In the case the game has been won, `[X]` should be replaced with "Congratulations!" (0.25)
    * In the case the game has been lost, `[X]` should be replaced with "Oh no!" (0.25)
 
[A short video demonstration of this game can be found here](https://youtu.be/GcWmo_BdTB0). Please note - do not copy what you see in this video. There are parts of this video that may not comply with the specification. This is purely here to give you a very general sense of the behaviour in case you are struggling to visualise it.

### 1.3. Other notes

* If we don't specify a constraint, then you have discretion as to what to do, assuming it still ensures that your application is usable and accessible.
* If a CSS property constraint is not specified (e.g. font size) then you are free to use whatever is reasonable and usable.
* While we don't specify many requirements around usability and accessibility, you should take initiative to make your work both usable and accessible to gain the marks in that area.
* You should ensure that your programs have been tested on one of the following two browsers:
  * Locally, Google Chrome
  * On CSE machines, Chromium

## 2. Marking Criteria

For each of sections, marks will be awarded according to the following criteria:
 * 75%: Providing the features and functionality required at least one of desktop, tablet, or mobile.
 * 15%: Ensuring responsiveness on desktop, tablet, mobile
   * Desktop testing will be done on a `1800px` x `800px` viewport size
   * Tablet testing will be done on a `1200px` x `500px` viewport size
   * Mobile testing will be done on a `600px` x `500px` viewport size
 * 10%: Usability & accessibility

## 3. Submission

At the end of your specified exam time, we will automatically collect the code on your `master` branch's HEAD (i.e. latest commit). 

Please note: If you develop locally ensure you check that your code works on the CSE servers. Failure to do so could result in a fail mark in the exam.

## 4. Originality of Work

The work you submit must be your own work. Submission of work partially or completely derived from any other person or jointly written with any other person is not permitted.

The penalties for such an offence may include negative marks, automatic failure of the course and possibly other academic discipline. Assignment submissions will be examined both automatically and manually for such submissions.

Relevant scholarship authorities will be informed if students holding scholarships are involved in an incident of plagiarism or other misconduct.

Do not provide or show your assignment work to any other person — apart from the teaching staff of COMP6080.

If you knowingly provide or show your assignment work to another person for any reason, and work derived from it is submitted, you may be penalized, even if the work was submitted without your knowledge or consent.  This may apply even if your work is submitted by a third party unknown to you.

Note you will not be penalized if your work has the potential to be taken without your consent or
knowledge.
