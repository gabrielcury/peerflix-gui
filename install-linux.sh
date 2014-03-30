#!/bin/bash

npm install && bash build.sh && mkdir peerflix-gui && cp app.nw peerflix-gui/app.nw && cp nw peerflix-gui/nw && cp nw.pak peerflix-gui/nw.pak && echo "./nw app.nw" > peerflix-gui/run.sh && chmod +x peerflix-gui/run.sh
