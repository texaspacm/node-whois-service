var whois = require('node-whois');
var RSVP = require('rsvp');


var r = /:\/\/(.[^/]+)/;
var url = "http://realpage.com/questions/5343288/get-the-domain-and-page-name-from-a-string-url".match(r)[1];


var getWhois = function(url) {
    var promise = new RSVP.Promise(function(resolve, reject){
        whois.lookup(url, function(err, data) {
            //console.log(data)
            if (err) {
                console.log(err);
                reject(this);
            } else {

                var start = data.indexOf("Registrant Organization:");
                var end = data.indexOf("Registrant Street:")
                var slice = data.slice(start, end - 1);
                console.log(slice);
                resolve(this.slice);

            }
        })
    });

    return promise;
};

getWhois(url).then(function(json) {
    // continue
    //console.log(json);
}, function(error) {
    // handle errors
});
/**
 * Created by philipmeyer1 on 7/27/15.
 */
