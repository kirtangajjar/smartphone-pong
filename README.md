# smartphone-pong
A smartphone controlled pong game inspired by - https://goo.gl/5rYV1T

The following is a pre-alpha version of smartphone-pong. The backend is currently complete and frontend work is in progress.

The idea of this project is that two playes can play pong with each other on same PC, while controlling their paddles with smartphone giving you that feeling of nostalgia of childhood of playing with Nintendo NES, Sega Genesis or other gaming consoles of the good times. 

Above all that you can do it without installing any kind of extra app/software on your mobile/pc. All you need to have is browser, and a QR code scanner in mobile. Open the website in PC, point your mobile on screen and start playing!

## Build Instructions

1. Clone this repo or download it as zip.
2. Open terminal and navigate to directory smartphone-pong/.
3. Run ```node server.js```.
4. Point your browser on PC to ```localhost:8080```.
5. There will be two QR Codes. each player should scan one and one the link they get through that. 
6. Swipe for left/right moverment of paddle.

Currently, as in pre dev, you might not be able to "Swipe and move paddle". to check the connection of controller with game, you can try this - 

Instead of scanning QR code by mobile, just copy the text below QR code and add localhost:8080 before it. i.e ifthe text is ```hQNXJBrESJZRFZjtAAAA/uqhgki812xrbe29```, you should open ```localhost:8080/hQNXJBrESJZRFZjtAAAA/uqhgki812xrbe29``` in your borwser. Now just press left and right keys. you'll se an alert on main game page.
