/*jshint browser:true, devel:true, node:true, jquery:true*/
(function ($) {
    "use strict";
    var sys = require('sys'),
        exec = require('child_process').exec,
        child,
        ansiStrip = require('ansi-stripper'),
        versionNumber = "0.0.2";

    $(document).ready(function () {
        //push app version number to DOM
        $(".versionNum").append(versionNumber);
        $("#submitURI").click(function () {
            //console.log("clicked");
            var magnetURI = $("#magnet").val();
            console.log("peerflix '" + magnetURI + "'" + " --list");
            //run peerflix and get our data
            child = exec("peerflix '" + magnetURI + "'" + " --list", function (error, stdout, stderr){
                console.log("stderr: " + stderr);
                console.log("error: " + error);
                console.log("stdout: " + stdout);
                $("#files").append(ansiStrip(stdout));
                $("#pleaseWait").hide();
                $(".step3").fadeIn(500);
                $("#submitIndex").click(function () {
                    //console.log("clicked");
                    //console.log("trying to run: " + "peerflix '" + magnetURI + "'" + "--vlc" + " --index " + $("#indexID").val());
                    var child2 = exec("peerflix '" + magnetURI + "'" + " --vlc" + " --index " + $("#indexID").val(), function (error, stdout, stderr) {
                        //$("#files").append(ansiStrip(stdout));
                        //document.reload();
                    });
                    $("#notice").append("Please wait, autoplay sometimes takes a few moments to start...");
                });
            });
            //handle GUI
            $(".step1").fadeOut(500, function () {
                $(".step2").fadeIn(500);
            });
        });

    });
}(jQuery));
