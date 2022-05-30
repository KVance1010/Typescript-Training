import { Coach } from "./Coach";
import { CreketCoach } from "./CrecketCoach";
import { GolfCoach } from "./GolfCoach";



let myCrecketCoach = new CreketCoach();
let myGolfCoach = new GolfCoach();


// declare an array for coaches ... initially empty

let theCoach: Coach[] = [];
theCoach.push(myCrecketCoach);
theCoach.push(myGolfCoach);

for(let tempCoach of theCoach){
    console.log(tempCoach.getDaileyWorkout());
}
