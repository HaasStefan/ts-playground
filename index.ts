import { Bird } from "./birds/bird";
import { generateBirdClass, generateBirdInterface } from "./birds/bird-factory";
import { Eagle } from "./birds/eagle";
import { Parrot } from "./birds/parrot";

const bird = generateBirdInterface("parrot");
console.log(typeof bird);


const eagle = generateBirdClass("eagle");
console.log(typeof eagle);
console.log(eagle instanceof Bird);
console.log(eagle instanceof Eagle);
console.log(eagle instanceof Parrot);