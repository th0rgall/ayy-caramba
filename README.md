# ¡AYY Caramba! Info Screen
### [1 minute demo video](https://www.youtube.com/watch?v=d5mFhK3LUow)
![Info Screen](https://i.imgur.com/vtsLDFH.png)


> Project for the [Junction 2019](https://www.hackjunction.com/) hackathon, Nov. 15-17 
  Team: @Tarunika, @hooglander, @Carolina, @th0rgall

[AYY](https://ayy.fi/), Aalto University's student union, wants to install info screens in the hallways of their student accomodation. With our Junction 2019 project we hope we gave them a joyful idea of what the possibilities are.

We created a prototype of an interactive info screen that shows useful information such as a message board and laundry bookings, but also included a multiplayer tic-tac-toe game that can be controlled with a Telegram bot!

## Vision
Info screens with event information and ads are commonplace. 

We give the user control via a chat interface they already have and keep it cheap by avoiding a touchscreens.

Most importantly we enable human interactions between people who live so close together, yet find the barrier high to connect.


## Usage

This project is a hacky situation 🙃 We've got:
- a `functions` directory in the repo with a simple Firebase Cloud Functions backend that connects to a Telegram bot
- a Firebase Realtime Database that saves the last issued tic-tac-toe command
- a [JSFiddle frontend](https://jsfiddle.net/thorgalle/va0kz3pm/) that listens to updates from the Firebase database
- a [Figma prototype](https://www.figma.com/proto/KVVzpE9Ih60eC1NMrNcM9C/Junction) of our screen
- a browser extension `proto-inject-extension` in the repo for Chrome/Firefox that hacks the Figma prototype viewer and injects the JSFiddle game over it with an `<iframe>`. Yep.

To try it yourself:
1. Load the browser extension (download a Chrome .crx [here](https://drive.google.com/open?id=1MQgMcI-BwBA6pgllCr_tHDPXjhTPng1N), drag into you Extensions page. Otherwise load the unpacked extension.)
2. Go to the [Figma prototype](https://www.figma.com/proto/KVVzpE9Ih60eC1NMrNcM9C/Junction)
3. Open Telegram and search for the bot "AYYGameBot". Send the number you want to play on the board.
