// Code for cookie consent component
$(document).ready(function(){
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $(".cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
});
