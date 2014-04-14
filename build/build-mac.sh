#!/bin/bash

#build the app.nw
cd ../ && npm install && zip -r app.nw index.html package.json app node_modules &&
#now copy the app.nw package to the node_webkit.app placed inside the build dir
mv app.nw node-webkit.app/Contents/Resources/.

