"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CrecketCoach_1 = require("./CrecketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCrecketCoach = new CrecketCoach_1.CreketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches ... initially empty
var theCoach = [];
theCoach.push(myCrecketCoach);
theCoach.push(myGolfCoach);
for (var _i = 0, theCoach_1 = theCoach; _i < theCoach_1.length; _i++) {
    var tempCoach = theCoach_1[_i];
    console.log(tempCoach.getDaileyWorkout());
}
