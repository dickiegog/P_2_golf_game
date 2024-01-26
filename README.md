!

## Codeanywhere Reminders

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere, in the terminal, type:

`python3 -m http.server`

A button should appear to click: _Open Preview_ or _Open Browser_.

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere with no-cache, you can use this alias for `python3 -m http.server`.

`http_server`

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A button should appear to click: _Open Preview_ or _Open Browser_.

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---

# Golf Game

## Table of Contents

- [Description](#description)
- [Game Rules](#game-rules)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Images] (#image)
- [Author](#author)
- [License](#license)

## Description

Golf Game is a simple two-player golf simulation game. Players take turns to hit the golf ball towards the hole, and the player with the fewest swings wins the game. The game includes multiple holes, each with its own par score, and the player's score is calculated based on their performance relative to the par score of each hole.

## Game Rules

- The game consists of multiple holes, each with its own par score, which represents the expected number of swings to complete the hole.
- Players take turns hitting the golf ball toward the hole.
- Players can choose to manually swing or enable an "Auto" mode for the second player, simulating play against a computer.
- The player with the fewest swings wins each hole.
- After both players finish a hole, the par score of that hole is added to their overall score.
- The game ends after completing all the holes, and the player with the lowest overall score wins.

## Getting Started

To get started with the Golf Game, follow these steps:

1. Clone or download the project from the repository: [Golf Game Repository](https://github.com/your-username/golf-game).

2. Open the `index.html` file in your web browser to launch the game.

3. Enjoy playing Golf Game with a friend or against the computer!

## How to Play

- Player 1 starts by clicking the "Swing" button to take their turn.

- Player 2 can click "Swing" or the "Auto" button to enable automatic play, where the computer will take swings until the ball reaches the hole.

- Players take turns and continue playing until both players finish the current hole.

- After both players finish a hole, the par score of that hole is added to their overall score.

- The game ends after completing all the holes, and a winner is determined based on the lowest overall score.

## Image

Image credit from:
background - "https://www.istockphoto.com/vector/golf-field-with-flag-gm165594199-6744168?phrase=golf+backgrounds"
golf icon - <a href="https://www.freepik.com/icons/golf">Icon by juicy_fish</a>

## Author

This Golf Game project was created by [Your Name]. Feel free to reach out if you have any questions or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

