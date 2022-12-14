# How to start the app

Run ```npm i```
Run ```npm run start```

You will need to add a ```.env``` file inside of the sudokuru folder.<br>
The values needed for the ```.env``` file can be found in our shared password notebook kept in the secret location on campus in the MSB bathroom.<br>
Copy those values and paste them in the ```.env``` folder. The reason why we are doing this is so we don't store sensitive information publicly in code.<br>







For testing with a mobile device you can download the Expo app.<br>
You will also need to be logged in to Expo on the development device (laptop/desktop that is running the code)<br>
To login type: ```expo login``` and fill out the parameters.<br><br>

**Note: If you get the ```Callback URL mismatch``` error, do the following step:**<br>
For the app, each developer will have a different redirect endpoint. Log in to Auth0 and go to Applications. 
Go to Sudokuru and then go to Settings. In Application URI, in Application Login URI, you can set your URI by following the existing format and using your expo username.<br><br>
Contact Thomas to get added to the Expo organization so you can log in with your own email and password.<br><br>

For iOS, scan the QR code with your camera app, for Android you will need to scan the code from within the Expo app.<br><br>
For Web, hit the w key to start up the website at ```localhost:19006```

## This Project uses React-Native-Web. This means we will share code for the app and the website and avoid duplicating our work. 
