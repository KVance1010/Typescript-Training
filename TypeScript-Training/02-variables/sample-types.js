var found = true;
var grade = 88.6;
var firstName = 'Kyle';
var lastName = "vance";
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// arrays   ... arrays are always global
var reviews = [5, 4, 3, 2, 1];
var sports = ["golf", "tennis", "football"];
var total = 0;
// adding to an array
sports.push("baseball");
// regular for loop
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
// for each loop. keyword of
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    // conditional 
    if (tempSport == "tennis") {
        console.log("Hard sports" + tempSport);
    }
    else {
        console.log("Easy sport " + tempSport);
    }
}
var average = total / reviews.length;
console.log("Review average " + average);
