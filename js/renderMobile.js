// JavaScript - /js/renderMobile.js?ver=1

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


    var isUniqueVisit = 0
    if (sessionStorage.getItem("xso-visit") != "visit") {
        isUniqueVisit = 1
    } 
    sessionStorage.setItem("xso-visit", "visit")
    
    var domainSplit = window.location.host.split(".");
    var domain = ""
    for (var i = 0; i < domainSplit.length; i++) {
        if (domainSplit[i] != "www") {
            if (domain != "") {
                domain += "."
            }
            domain += domainSplit[i];
        }
    }
    const data = {
        "isUniqueVisit": isUniqueVisit,
        "domain": domain,
        "location": window.location.pathname
    };
    fetch("https://visitors.xsorexia.com/api/visitPage.php", {
        method: "POST",  // HTTP method
        headers: {
            "Content-Type": "application/json"  // Specify JSON format
        },
    
        body: JSON.stringify(data)  // Convert the data object to a JSON string
    })
    