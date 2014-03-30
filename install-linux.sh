#!/bin/bash

npm install && bash build.sh && mkdir peerflix-gui && cp app.nw peerflix-gui/app.nw && cp nw peerflix-gui/nw && cp nw.pak peerflix-gui/nw.pak && cat peerflix-gui/nw app.nw > peerflix-gui/peerflix-gui && chmod +x peerflix-gui && gksu install peerflix-gui/peerflix-gui /usr/local/bin && gksu install peerflix-gui/nw.pak /usr/local/bin
