import { Bird } from "./bird";
import { Eagle, IEagle } from "./eagle";
import { IParrot, Parrot } from "./parrot";

export function generateBirdInterface(type: "parrot" | "eagle"): IParrot | IEagle {
  switch (type) {
    case "parrot":
      const parrot: IParrot = {
        color: "red",
        name: "Hans",
        species: "Psittaciformes",
        height: 30,
      };
      return parrot;
    case "eagle":
      const eagle: IEagle = {
        hasClaws: true,
        name: "Günther",
        species: "Aquila",
        height: 50,
      };
      return eagle;
  }
}


export function generateBirdClass(type: "parrot" | "eagle"): Bird {
  switch (type) {
    case "parrot":
      return new Parrot();
    case "eagle":
      return new Eagle();
  }
}