# Rowland's Tic-Tac-Tow README

---

## URL: https://rowlandhill.github.io/tic-tac-row/

---

### Technologies used: this SPA uses HTML, CSS, JavaScript and jQuery.
### Eventually I would like to add Bootstrap to the technologies list.

---

### Document your planning and tell a story about your development process and problem-solving strategy:
I began planning by drawing out a diagram of how I wanted the app to look.  The finished product doesn't look exactly like my diagram, but
it was helpful to have a visual before I started building.  After that, I generated my user story, which I think I should have done first.
I then mapped out the steps that I would take to move the project forward, with a ton of help
from the provided "to do" list:
- Create a basic board with HTML and CSS
- Set up Authentications
- Build the engine, make sure it works, test for winners, make sure you can play a full game where a winner is declared
and no additional moves can be made.  Also, no ties or illegal moves.
- Connect the game to the backend
- Make it look good (if time allows)

I collaborated with a few classmates to get things started, and whenever we ran into issues, odds were good that one of us ran into something
similar and could nudge the other one in the right direction.

When it came to debugging, console.log was a massive help when I was trying to pass specific data and wanted to make sure the data I expected
was being passed through.
Debugger was a big help in freezing the application so I could see what was happening at that given moment in time.  Debugger came in handy when I was trying to figure out why my PATCH was not updating my game from "over: false" to "over: true".  Being able to freeze the application in time was huge.

The Issue Queue was a huge help, too, whenever I was stuck beyond my abilities to detect.

---

### Unsolved problems:
- Placement on the page is fine, but I would like it to eventually reflect my original diagram
- I would like to add a leaderboard, to show who has won the most games out of everyone
- I would like to add some graphics and sounds
- I would like to add bootstrap buttons and just give it a cleaner overall look

---

### Link to wireframes and user stories:
Web Wireframe (version 1): http://imgur.com/g933oFU
Web Wireframe (version 2): http://imgur.com/UYcVpLd
Mobile Wireframe: http://imgur.com/H0Ct8vN

---

(I wrote my user story on my computer:)

### User Story:

As a user, I want to be able to play tic tac toe.  I want to be able to create an account, so I can sign
in and out with a password.

I would like to be able to change my password if I want.

I would like to be able to see how many games I've played, and I would eventually like to see the rankings of the top 5-10
users shown on the app, like an arcade.

I want to be able to click a button to start a new game without having to refresh the page.

Eventually, I want the starting playing to be randomized, and I would also like to be able to play
a user on another computer.
