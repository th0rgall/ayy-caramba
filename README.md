# ayy-caramba
Project for the [Junction 2019](https://www.hackjunction.com/) hackathon.  
Team: @Tarunika, @hooglander, @Carolina

[AYY](https://ayy.fi/), Aalto University's student union, wants to install info screens in the hallways of their student accomodation. With our Junction project we hope we gave them a joyful idea of what could be done with that.

We created an interactive prototype of a screen layout. It has various useful information such as a message board, and a multiplayer tic-tac-toe game that can be controlled with a Telegram bot.

## Usage

This project is a hacky situation! We've got:
- a `functions` directory in the repo with a simple Firebase Cloud Functions backend that connects to a Telegram bot
- a Firebase Realtime Database that saves the last issued tic-tac-toe command
- a [JSFiddle frontend](https://jsfiddle.net/thorgalle/va0kz3pm/) that listens to updates from the Firebase database
- a [Figma prototype](https://www.figma.com/proto/KVVzpE9Ih60eC1NMrNcM9C/Junction) of our screen
- a browser extension `proto-inject-extension` in the repo for Chrome/Firefox that hack the Figma prototype and overlays the JSFiddle game over it. Yep.

To try it yourself:
1. Install the browser extension (download a Chrome .crx [here](https://drive.google.com/open?id=1MQgMcI-BwBA6pgllCr_tHDPXjhTPng1N), drag into you Extensions page)
2. Go to the [Figma prototype](https://www.figma.com/proto/KVVzpE9Ih60eC1NMrNcM9C/Junction)
3. Open Telegram and search for the bot "AYYGameBot". Send the number you want to play on the board.
