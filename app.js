/*jshint browser:true, devel:true, node:true, jquery:true*/
(function ($) {
    "use strict";
    var sys = require('sys'),
        exe = require('child_process').exec,
        child;

    $(document).ready(function () {
        $("#submitURI").click(function () {
            console.log("clicked");
            var magnetURI = $("magnetURI").val;
            //run peerflix and get our data

            $(".step1").fadeOut(500, function () {
                $(".step2").fadeIn(500);
            });
        });
    });
}(jQuery));
