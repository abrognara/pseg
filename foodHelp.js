'use strict';

var Alexa = require('alexa-sdk');
var https = require('https');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('FoodHelpIntent');
    },
    
    'FoodHelpIntent' : function () {
        var cType = this.event.request.intent.slots.CuisineType.value;
        
        switch(cType) {
        case 'sandwich':
        case 'sandwiches':
        case 'deli':
            this.emit(':tell', 'Right across the street from P S E G is hannas deli. Cafe Airlie at 32 commerce street is also really good.');
            break;
        case 'mexican':
            this.emit(':tell', 'There is a qdoba behind the whole foods at 64 halsey street');
            break;
        case 'mediterranean':
            this.emit(':tell', 'There is a halal guys at 72 halsey street');
            break;
        case 'pizza':
            this.emit(':tell', 'There is a blaze pizza right across the street from military park at 691 broad street.');
            break;
        case 'asian':
            this.emit(':tell', 'There is a wok to walk right across the street from military park.');
            break;
        case 'barbecue':
            this.emit(':tell', 'There is a dinosaur barbecue on 224 market street, right next to the prudential center.');
            break;
        default: 
            this.emit(':tell', 'Sorry, I dont know where to find that.'); 
        }
    },
    
    'FoodRandomIntent' : function () {
        var rand = Math.floor(Math.random() * 6); //multiply math.random() with however many switch cases you have
        
        switch(rand) {
        case 0:
            this.emit(':tell', 'Right across the street from P S E G is hannas deli.');
            break;
        case 1:
            this.emit(':tell', 'There is a qdoba behind the whole foods at 64 halsey street');
            break;
        case 2:
            this.emit(':tell', 'There is a halal guys at 72 halsey street');
            break;
        case 3:
            this.emit(':tell', 'There is a blaze pizza right across the street from military park at 691 broad street.');
            break;
        case 4:
            this.emit(':tell', 'There is a wok to walk right across the street from military park.');
            break;
        case 5:
            this.emit(':tell', 'Cafe airlie at 32 commerce street has sandwiches and salads.');
            break;
        default: 
            this.emit(':tell', 'Sorry, I dont know where to find that.'); 
        }
    }
};
