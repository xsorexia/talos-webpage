// JavaScript - /js/renderMobile.js

    var curState = "desktop";
    var isDesktopLoaded = false;
    var isMobileLoaded = false;
    var mobileWidth = 800;
    $(window).on('load resize', function () {
        if ($(window).width() < mobileWidth) {
                if (isMobileLoaded == false) {
                        $("#mobile-div").load(mobile);
                        isMobileLoaded = true;
                    document.getElementById("desktop-div").style.display = "none";
                    document.getElementById("mobile-div").style.display = "block";
                } else if (curState == "desktop" && isMobileLoaded == true) {
                        document.getElementById("desktop-div").style.display = "none";
                        document.getElementById("mobile-div").style.display = "block";
                } else {
                        // do nothing
                }
                curState = "mobile";	
                $(".mobile-css").removeAttr("disabled");
                $(".desktop-css").attr("disabled", "disabled");	        
        } else if ($(window).width() >= mobileWidth) {
                if (isDesktopLoaded == false) {
                        $("#desktop-div").load(desktop);
                        isDesktopLoaded = true;
                    document.getElementById("mobile-div").style.display = "none";
                    document.getElementById("desktop-div").style.display = "block";
                } else if (curState == "mobile" && isMobileLoaded == true) {
                        document.getElementById("mobile-div").style.display = "none";
                        document.getElementById("desktop-div").style.display = "block";
                } else {
                        // do nothing
                }
                curState = "desktop";	
                $(".desktop-css").removeAttr("disabled");
                $(".mobile-css").attr("disabled", "disabled");
        }
    });