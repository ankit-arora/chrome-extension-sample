console.log("Extension is active");

var elt = document.createElement("script");
elt.innerHTML = "window.clevertap = {event:[], profile:[], account:[], notifications:[]};clevertap.account.push({'id': '846-Z7Z-6K4Z'})";
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
    debugger;
    document.head.appendChild(elt);
}

var eventName = "testevent";
var property = {
    "property1":"from gmail",
    "property2":"again from gmail"
};

raiseEvent(eventName, JSON.stringify(property));