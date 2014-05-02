/*jshint browser:true, devel:true, node:true, jquery:true*/
(function ($) {
    "use strict";
    //variable declarations
    var torrentStream = require('torrent-stream');
    var express = require('express');
    var server = express();
    var fs = require('fs');
    var os = require('os');
    var bytes = require('bytes');

    //function definitions
    function uiHandler (step) {
        var torrentMagnetLink = "";
        var selectedFileIndex;
        var engine;
        var filesInTorrent;
        switch (step) {
        case 0:
            $('#uiHolder').load('ui/init.html', function (responseText, responseStatus, XMLHttpRequest) {
                //define all event handlers here
                $('#submitURI').click(function () {
                    torrentMagnetLink = $('.magnetURI').val();
                });
                uiHandler(1);
            });
            break;
        case 1:
            $('#uiHolder').load('ui/filepicker.html', function (responseText, responseStatus, XMLHttpRequest) {
                //star the torrent engine and get the file list
                engine = torrentStream(torrentMagnetLink);
                engine.on('ready', function () {
                    filesInTorrent = engine.files;
                    //populate file picker
                    for(var i = 0; i < filesInTorrent.length; i++) {
                        $('#filePicker').append("<div class='file'>" + filesInTorrent[i].name + "<input type='radio' name='fileSelection'></div>");
                    }
                    //define all event handlers here
                    $('#submitFile').click(function () {
                        //inside click() of the Start button, start the stream, and the express http server

                        //move to case 2
                        uiHandler(2);
                    });

                });
            });
            break;
        case 2:
            $('#uiHolder').load('ui/status.html');
            //begin stream logic - supply engine with a magnet link
                //this step should be fairly simple - expressing engine.swarm.downloaded and fileSizeInBytes of downloaded file on fs
        }
    }


    $(document).ready(function () {
        uiHandler(0);
    });
}());
