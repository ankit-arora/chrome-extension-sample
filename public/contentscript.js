console.log("Extension is active");

var elt = document.createElement("script");
elt.innerHTML = "window.clevertap = {event:[], profile:[], account:[], notifications:[], onUserLogin:[]};window.clevertap.account.push({'id': '846-Z7Z-6K4Z'})";
document.head.appendChild(elt);

(function () {
    var wzrk = document.createElement('script');
    wzrk.type = 'text/javascript';
    wzrk.async = true;
    wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js?v=0';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wzrk, s);
})();

function raiseEvent(name, properties){
    var elt = document.createElement("script");
    var evtData = 'window.clevertap.event.push("' + name + '",'+ properties + ');';
    elt.innerHTML = evtData;
    document.head.appendChild(elt);
}

var eventName = "testevent";
var property = {
    "property1":"from gmail",
    "property2":"again from gmail",
    "property3":"again again from gmail"
};

var user = {
    "Site": {
        "Name": "Blah blah",            // String
        "Identity": 6102,              // String or number
        "Email": "blah2@gmail.com",         // Email address of the user
        "Gender": "M",                     // Can be either M or F
        "Employed": "Y",                   // Can be either Y or N
        "Education": "Graduate",           // Can be either School, College or Graduate
        "Married": "Y",                    // Can be either Y or N

// optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": false,                // Disable email notifications
        "MSG-push": true,                  // Enable push notifications
        "MSG-sms": true                    // Enable sms notifications
    }
};


function raiseOnUserLogin(user){
    var elt = document.createElement("script");
    var evtData = 'window.clevertap.onUserLogin.push(' + user + ');';
    elt.innerHTML = evtData;
    document.head.appendChild(elt);
}


raiseEvent(eventName, JSON.stringify(property));
raiseOnUserLogin(JSON.stringify(user));