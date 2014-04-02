peerflix-gui is a node-webkit application frontend for peerflix.

This tool allows you to view the contents of a torrent, and select a file for live streaming.

Requires node-webkit for your platform.

https://github.com/rogerwang/node-webkit

--Binary download for Mac OS--
http://www.cs.unca.edu/~npelone/files/peerflix-gui.zip

1. Install nodejs from http://nodejs.org
2. Open terminal and type "sudo npm install -g peerflix" without the quotes
3. This needs VLC. If you don't have it already, get it from http://videolan.org
4. Download and open this app. If it complains about security, control-click on the app and then hit "Open".

Download and unzip a node-webkit binary package into the same folder as this repo. Install peerflix-gui via the script provided for your platform. If none exists yet, npm install. After that step, zip up all the files listed in build.sh ,  and then rename that zip app.nw.

Then just open the app.nw with node-webkit. On Windows, you can drag the app.nw onto the nw program in the same folder to open it up. On Mac OS, open a Terminal, go to your peerflix-gui directory, and do ./nw app.nw to start peerflix-gui.
