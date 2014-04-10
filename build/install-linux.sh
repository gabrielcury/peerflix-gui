#!/bin/bash
#cd to the root dir, npm install, then run
cd ../ && npm install && cd build && bash build-linux.sh &&
#conjoin app.nw and nw together as peerflix-gui
cd ../ && cat nw app.nw > peerflix-gui &&
#mark peerflix-gui executable
chmod +x peerflix-gui &&
#finally, install peerflix-gui and nw.pak to /usr/local/bin
gksu install peerflix-gui /usr/local/bin &&
gksu install nw.pak /usr/local/bin &&
echo "Installed peerflix-gui and nw.pak to /usr/local/bin"
