# fsab
Project Overview: This project is a tictactoe game built in react. Two players take turns placing X's and O's
in a 3x3 grid. The game detects when a player wins or when the game ties, highlighting the squares that allowed a player to win and tracking how many times each player has won. The board can also be reset without changing the score between both players. 
How to run it: Node.js must be installed and then ran in terminal through command npm install. Then command: npm start will start the local server in a browser tab. 
Contribution: I modified the original structure given to track the score between the two players. I removed the feature that allowed to move back to any move as that defeats the competetiveness between both players if take-backs are allowed. But I kept the restart game feature so multiple rounds can be played. I then added the highlighted winning squares as it makes it easier to realize when a player wins. 
What I learned: I struggled to understand the way variables are defined and set later on as react with useState. React also has pretty weird notation compared to what I'm used to in Java and Python. I also didn't understand CSS and had to use claude to learn that being completely honest. 
References: https://react.dev/learn/tutorial-tic-tac-toe#setup-for-the-tutorial 
