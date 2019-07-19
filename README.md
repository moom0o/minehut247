# minehut247
Make your minehut server run 24/7, I am not responsible if you get punished. This project is for educational purposes only.

To autoreconnect, it requires a terminal that can run sh scripts.


Installation steps:
<br>
1: Git clone the repo
<br>
2: Edit config.json with your desired settings
<br>
You might need to install node.
<br>
3: run `npm install mineflayer --save`
<br>
4: run start.sh (Recommended) or `node index.js`
<br>
5: If you run into any errors follow the troubleshooting below.
<br>

Error troubleshooting:
<br>
Getting a type error: make sure to run `chmod 777 start.sh` and `chmod 777 index.js`
<br>
Getting a permission denied: run `chmod 777 start.sh` and `chmod 777 index.js`
<br>

You might have to `chmod 777 config.json` as well.

