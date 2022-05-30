let found:boolean = true;
let grade: number = 88.6;
let firstName: string = 'Kyle';
let lastName: string = "vance";

console.log(found);
console.log("The grade is " + grade);
console.log("Hi "+ firstName + " " + lastName);

// arrays   ... arrays are always global
let reviews: number[] = [5,4,3,2,1];
let sports: string[] = ["golf", "tennis", "football"]
let total: number = 0;
// adding to an array
sports.push("baseball");
// regular for loop
for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}
// for each loop. keyword of
for(let tempSport of sports){
    // conditional 
    if (tempSport == "tennis"){
        console.log("Hard sports " + tempSport);
    }
    else{
        console.log("Easy sport " +tempSport);
    }   
}

let average: number = total/reviews.length;
console.log("Review average " + average);